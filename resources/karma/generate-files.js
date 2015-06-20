module.exports = function ( fileGroups ) {
  var obj = {};
  fileGroups = fileGroups || [];

  var files = [];

  fileGroups.forEach( function ( group ) {
    var _files = group.files || [];
    if ( group.preprocessors && group.preprocessors.length > 0 ) {
      _files.forEach( function ( file ) {
        obj[ file ] = obj[ file ] || [];
        obj[ file ] = obj[ file ].concat( group.preprocessors );
      } );
    }
    files = files.concat( _files );
  } );

  return {
    files: files,
    preprocessors: obj
  };
};
