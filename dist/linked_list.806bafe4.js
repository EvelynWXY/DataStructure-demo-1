const createList = (value)=>{
    return createNode(value);
};
const appendList = (list1, value)=>{
    const node = createNode(value);
    let x = list1;
    while(x.next)x = x.next;
    //x.next === null 此时 x 是最后一个节点
    x.next = node;
    //list.next = node;
    return node;
};
const removeFromList = (list2, node)=>{
    //   debugger;
    let x = list2;
    let p = node;
    //如果 node 不在 list 中，x 就可能为 null
    while(x !== node && x !== null){
        p = x; //先把x记下来
        x = x.next;
    }
    if (x === null) //如果 x 为 null，则不需要删除，直接return，false表示无法删除不在list里的节点
    return false;
    else if (x === p) {
        //这说明要删除的节点是第一个节点
        p = x.next;
        return p; //如果删除的是第一个节点，那么就要把新 list 的头节点 p 返回给外面，即 newList = removeFromList(list,list)
    } else {
        p.next = x.next;
        return list2; //如果删除的不是第一个节点，返回原来的 list 即可
    }
};
const createNode = (value)=>{
    return {
        data: value,
        next: null
    };
};
const travelList = (list3, fn)=>{
    let x = list3;
    while(x !== null){
        fn(x);
        x = x.next;
    }
};
const list = createList(10);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
// console.log("node2");
// console.log(node2);
// removeFromList(list, node3);
// console.log("list");
// console.log(list);
travelList(list, (node)=>{
    console.log(node.data);
});

//# sourceMappingURL=linked_list.806bafe4.js.map
