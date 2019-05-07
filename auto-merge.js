const git = require('simple-git')('../test2')

git.outputHandler((command, stdout, stderr) => {
    stdout.pipe(process.stdout);
    stderr.pipe(process.stderr);
})
.add('./*')
.commit('commit before merging with master')
.push('origin', 'develop')
.checkout('master')
.pull()
.merge({'--strategy': 'ours'})
.add('./*')
.commit('merge develop with master')
.push('origin', 'master')
.checkout('develop')
