rebaseBranch="master"

for BRANCH in react react-auth; 
  do
    git checkout $BRANCH
    git merge $rebaseBranch
    git push
done
