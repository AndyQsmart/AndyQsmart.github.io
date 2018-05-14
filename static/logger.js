DEBUG_MODE = true
if (DEBUG_MODE == true)
{
    print = console.log
    warning = console.warn    
    error = console.error
}
else
{
    print = function() {}
    warning = function() {}
    error = function() {}
}
