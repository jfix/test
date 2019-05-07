const git = require('simple-git')()

git.outputHandler((command, stdout, stderr) => {
    stdout.pipe(process.stdout);
    stderr.pipe(process.stderr);
})
.add('./*')
.commit('commit before merging with master')
// // git.push('origin', 'develop')
// // .checkoutBranch('master')
// // .merge()
// // .add('./*')
// // .commit('merge develop with master')
// // .push('origin', 'master')
// // .checkoutBranch('develop')