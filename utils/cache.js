var grunt = require( 'grunt' );
var path = require( 'path' );
var file = grunt.file;

var cache = {
  load: function ( docId ) {
    var me = this;

    me._visited = {};
    me._persisted = {};
    me._pathToFile = path.resolve( __dirname, '../.cache/', docId );

    if ( file.exists( me._pathToFile ) ) {
      grunt.log.ok( '>>> loading cache from disk', me._pathToFile );
      this._persisted = file.readJSON( me._pathToFile );
    }
  },
  setKey: function ( key, value ) {
    this._visited[ key ] = true;
    this._persisted[ key ] = value;
  },
  removeKey: function ( key ) {
    delete this._visited[ key ];
    delete this._persisted[ key ];
  },
  getKey: function ( key ) {
    this._visited[ key ] = true;
    return this._persisted[ key ];
  },

  prune: function () {
    var me = this;
    var obj = {};

    var keys = Object.keys( me._visited );

    // no keys visited for either get or set value
    if ( keys.length === 0 ) {
      return;
    }

    keys.forEach( function ( key ) {
      obj[ key ] = me._persisted[ key ];
    } );

    me._visited = {};
    me._persisted = obj;
  },

  save: function () {
    var me = this;

    me.prune();
    file.write( me._pathToFile, JSON.stringify( me._persisted, null, 2 ) );
    grunt.log.ok( '>>> saving cache to disk', me._pathToFile );
  }
};

module.exports = {
  load: function ( docId ) {
    var obj = Object.create( cache );
    obj.load( docId );
    return obj;
  }
};
