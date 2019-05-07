const gitWorkingDir = process.env.GITWD || '../test2'
const git = require('simple-git')(gitWorkingDir)

git
    // make sure we see something while it works
    .outputHandler((command, stdout, stderr) => {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr);
    })

    // make sure we're in develop
    .checkout('develop')
    .add('./*')
    .commit('commit before merging with master')
    .push('origin', 'develop')

    // move to master for merge
    .checkout('master')
    .pull()
    .merge(['-srecursive', '-Xtheirs', 'develop'])
    .add('./*')
    .commit('merge develop with master')
    .push('origin', 'master')

    // switch back to develop
    .checkout('develop')
