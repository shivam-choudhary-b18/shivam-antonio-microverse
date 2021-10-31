// Script to resize window if needed

if ( document.location.search.match( /type=embed/gi ) )
{
  window.parent.postMessage( "resize", "*" ) ;
}
