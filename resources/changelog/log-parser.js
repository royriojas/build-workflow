module.exports = function ( content ) {
  content = content || '';
  var lines = content.split( '$-$-$' );

  var tagNames = {
    BLD: 'Build Scripts Changes',
    BUG: 'Bug Fixes',
    DOC: 'Documentation',
    FEAT: 'Features',
    REF: 'Refactoring',
    STY: 'Cosmetic fixes',
    TST: 'Tests Related fixes',
    ENH: 'Enhancements',
    NC: 'Other changes'
  };

  var parseSubject = function ( subject ) {
    subject = subject || '';
    var regexp = /^(BLD|BUG|DOC|FEAT|REF|STY|TST|ENH)\:\s/;
    var matches = subject.match( regexp ) || [];
    var tagId = ( matches[ 1 ] || 'NC' );
    var foundTag = tagNames[ tagId ];

    var bugIdMatcher = /\[(.*)\]/;

    var rallyMatches = subject.match( bugIdMatcher ) || [];
    var bugId = rallyMatches[ 1 ];

    if ( !bugId ) {
      bugIdMatcher = /\b([A-Z][A-Z]\d+)\b/;
      rallyMatches = subject.match( bugIdMatcher ) || [];
      bugId = rallyMatches[ 1 ];
    }

    var parsedSubject = {
      tagId: tagId,
      tagName: foundTag,
      shortDescription: subject.replace( regexp, '' ),
      bugId: bugId
    };

    //console.log('parsed subject', parsedSubject);

    return parsedSubject;
  };

  var groups = {};

  lines.forEach(function ( line ) {
    var parts = line.split( '$|$' );

    var sha1 = parts[ 0 ] || '';

    sha1 = sha1.replace( '\n', '' );

    var entry = {
      hash: sha1,
      commit: parseSubject( parts[ 1 ] ),
      subject: parts[ 1 ],
      body: parts[ 2 ],
      timestamp: parseInt( parts[ 3 ], 10 ),
      author: parts[ 4 ]
    };

    groups[ entry.commit.tagId ] = groups[ entry.commit.tagId ] || [];

    sha1 && groups[ entry.commit.tagId ].push( entry );
  } );

  return groups;
};
