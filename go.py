from Naked.toolshed.shell import execute_js, muterun_js

response = muterun_js('genseed.js', arguments="hello")

print response.stdout
print response.stderr

#success = execute_js('createasset.js')

#if success:
#    print 'yay'
#else:
#    print 'aww'
