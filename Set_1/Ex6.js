const dfs = tree => {
    const [name, children] = tree;
    console.log(name);
    console.log(children);
    if (!children){
        return;
    }
    return children.map(dfs);
};
const tree = ['A',[['a',[['aa']]],['b',[['ab'],['bb']]],['c',[['ca'],['cb',[['cba']]]]]]];
dfs(tree);

/*output
A
[ [ 'a', [ [Array] ] ],
  [ 'b', [ [Array], [Array] ] ],
  [ 'c', [ [Array], [Array] ] ] ]
a
[ [ 'aa' ] ]
aa
undefined
b
[ [ 'ab' ], [ 'bb' ] ]
ab
undefined
bb
undefined
c
[ [ 'ca' ], [ 'cb', [ [Array] ] ] ]
ca
undefined
cb
[ [ 'cba' ] ]
cba
undefined*/
