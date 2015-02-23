module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var twigRenderer = require( '../utils/twig-renderer' );
  var capitalize = require( '../utils/capitalize' );

  var path = require( 'path' );
  var changeLogRenderer = twigRenderer( path.resolve( __dirname, '../resources/changelog/changelog.twig' ));

  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  var moment = require( 'moment' );

  return {
    //    'changelog': {
    //      dest: './report/changelog/changelog.html'
    //    },
    options: {
      issueIDRegex: /\b([A-Z][A-Z]\d{4,})\b/g,
      filterTags: function ( tags ) {
        var prefix = grunt.option( 'tag-prefix' );

        if ( !prefix ) {
          return tags;
        }
        return tags.filter(function ( tag ) {
          var regx = new RegExp( '^' + prefix + '.*$' );
          return regx.test( tag );
        } );
      },
      validateTags: function ( tags ) {
        var range = grunt.option( 'tag-range' );
        if ( !range ) {
          return tags;
        }
        var oTags = range.split( '..' );
        if ( oTags.length === 1 ) {
          oTags.unshift( '' );
        }
        return oTags.reverse();
      },
      renderer: function ( groups ) {
        var me = this;
        var marked = require( 'marked' );
        return changeLogRenderer.render( {
          hasCommits: function ( group ) {
            var groupCommits = group.commits;
            var keys = Object.keys( groupCommits );
            var hasCommits = false;

            if ( keys.length > 0 ) {
              for ( var i = 0; i < keys.length; i++ ) {
                var feature = groupCommits[ keys[ i ] ];
                var subkeys = Object.keys( feature );
                for ( var idx = 0; idx < subkeys.length; i++ ) {
                  var commits = feature[ subkeys[ idx ] ];
                  if ( commits.length > 0 ) {
                    hasCommits = true;
                    break;
                  }
                }
              }
            }
            return hasCommits;
          },
          gitUrlForCommit: me.gitUrlForCommit, //|| changeLogConfig.gitUrlForCommit, //'http://git.kno.com/?p=cloud/kno-reader-ui.git;a=commit;h={0}',
          gitAuthorUrl: me.gitAuthorUrl, // || changeLogConfig.gitAuthorUrl, // 'http://git.kno.com/?p=cloud/kno-reader-ui.git;a=search;s={0};st=author',
          urlForBugId: me.urlForBugId, // || changeLogConfig.urlForBugId, // 'https://rally1.rallydev.com/#/search?keywords={0}',
          projectName: me.projectName || pkg.name, // pkg.name,
          projectVersion: me.projectVersion || pkg.version, //pkg.version,
          renderBody: function ( body ) {
            var me = this;

            body = body.replace( me.issueIDRegex, function ( a, b1 ) {
              return lib.format( '<a target="_blank" class="info-link" href="{0}"><span>{1}</span></a>', lib.format( me.urlForBugId, b1 ), b1 );
            } );

            return marked( body );
          },
          renderDate: function ( timestamp ) {
            var dateStr = moment.unix( timestamp ).format( 'DD/MM/YYYY HH:mm:ss' );
            return dateStr;
          },

          renderFeature: function ( feature ) {
            feature = feature.replace( me.issueIDRegex, function ( a, b1 ) {
              return lib.format( '<a target="_blank" class="info-link" href="{0}"><span>{1}</span></a>', lib.format( me.urlForBugId, b1 ), b1 );
            } );

            return marked( capitalize( feature )).replace( /<(\/)*p>/g, '' );
          },

          renderDescription: function ( log ) {
            var me = this;
            var commit = log.commit;
            var shortDescription = commit.shortDescription;

            shortDescription = shortDescription.replace( me.issueIDRegex, function ( a, b1 ) {
              return lib.format( '<a target="_blank" class="info-link" href="{0}"><span>{1}</span></a>', lib.format( me.urlForBugId, b1 ), b1 );
            } );

            return marked( capitalize( shortDescription )).replace( /<(\/)*p>/g, '' );
          },
          groups: groups,
          format: lib.format.bind( lib )
        } );
      }
    }
  };
};
