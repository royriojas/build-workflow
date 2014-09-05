module.exports = function ( grunt, pkg, options ) {
  'use strict';

  var gruntTaskUtils = options.gruntTaskUtils;

  var getRenderer = require( '../utils/get-renderer' );
  var capitalize = require( '../utils/capitalize' );

  var path = require( 'path' );
  var changeLogRenderer = getRenderer( path.resolve( __dirname, '../resources/changelog/changelog.dot' ));

  var lib = require( 'grunt-ez-frontend/lib/lib.js' );
  var moment = require( 'moment' );

  var commonConfig = options.commonConfig;

  var changeLogConfig = commonConfig.changelog || {};

  return {
    options: {

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
            var keys = Object.keys( group.commits );
            var hasCommits = false;
            if ( keys.length > 0 ) {
              for ( var i = 0; i < keys.length; i++ ) {
                var commits = group.commits[ keys[ i ] ];
                if ( commits.length > 0 ) {
                  hasCommits = true;
                  break;
                }
              }
            }
            return hasCommits;
          },
          gitUrlForCommit: me.gitUrlForCommit || changeLogConfig.gitUrlForCommit, //'http://git.kno.com/?p=cloud/kno-reader-ui.git;a=commit;h={0}',
          gitAuthorUrl: me.gitAuthorUrl || changeLogConfig.gitAuthorUrl, // 'http://git.kno.com/?p=cloud/kno-reader-ui.git;a=search;s={0};st=author',
          rallySearchUrl: me.rallySearchUrl || changeLogConfig.rallySearchUrl, // 'https://rally1.rallydev.com/#/search?keywords={0}',
          projectName: me.projectName || pkg.name, // pkg.name,
          projectVersion: me.projectVersion || pkg.version, //pkg.version,
          renderDescription: function ( log ) {
            var me = this;
            var commit = log.commit;
            var shortDescription = commit.shortDescription;

            shortDescription = shortDescription.substr( 0, 70 );

            shortDescription = shortDescription.replace( me.format( '[{0}]', commit.rallyId ), '{RALLY_ID}' );
            shortDescription = shortDescription.replace( /\b[A-Z][A-Z]\d+\b/g, '{RALLY_ID}' );
            shortDescription = shortDescription.replace( /\{RALLY_ID\}/g, me.format( '<a target="_blank" class="info-link" href="{0}"><span>{1}</span></a>', me.format( me.rallySearchUrl, commit.rallyId ), commit.rallyId ));

            return marked( capitalize( shortDescription )).replace( /<(\/)*p>/g, '' );
          },
          groups: groups,
          marked: marked,
          moment: moment,
          format: lib.format.bind( lib )
        } );
      }
    }
  };
};
