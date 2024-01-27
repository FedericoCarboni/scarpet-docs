---
title: all()
name: all
signatures:
  - params:
      - name: list
      - name: expr
        binds: [_, _i]
---

Returns `true` if all elements on the list satisfy the condition. Its roughly
equivalent to `all(list,expr) <=> for(list,expr)==length(list)`. `expr` also
receives bound `_` and `_i` variables. `break` and `continue` have no sense and
cannot be used inside of `expr` body.

```scarpet
all([1,2,3], check_prime(_))  => true
all(neighbours(x,y,z), _=='stone')  => true // if all neighbours of [x, y, z] are stone
map(filter(rect(0,4,0,1000,0,1000), [x,y,z]=pos(_); all(rect(x,y,z,1,0,1),_=='bedrock') ), pos(_) )
  => [[-298, 4, -703], [-287, 4, -156], [-269, 4, 104], [242, 4, 250], [-159, 4, 335], [-208, 4, 416], [-510, 4, 546], [376, 4, 806]]
    // find all 3x3 bedrock structures in the top bedrock layer
map( filter( rect(0,4,0,1000,1,1000,1000,0,1000), [x,y,z]=pos(_);
        all(rect(x,y,z,1,0,1),_=='bedrock') && for(rect(x,y-1,z,1,1,1,1,0,1),_=='bedrock')<8),
   pos(_) )  => [[343, 3, -642], [153, 3, -285], [674, 3, 167], [-710, 3, 398]]
    // ditto, but requiring at most 7 bedrock block in the 18 blocks below them
```
