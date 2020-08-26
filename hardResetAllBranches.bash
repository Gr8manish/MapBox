# make sure we are currently on no branch, so every branch can be deleted
git checkout --detach master

# delete all local branches
git branch | grep -v "HEAD detached" | xargs git branch -D

# re-create all branches from origin
while read b; do git branch ${b#origin/} $b; done < <(git branch -r | grep 'origin/')

# check out the new master
git checkout master