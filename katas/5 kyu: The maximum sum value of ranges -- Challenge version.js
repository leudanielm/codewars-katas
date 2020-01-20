// https://www.codewars.com/kata/583d171f28a0c04b7c00009c

function buildSegmentTree(arr, tree, node, beg, end){
    if(beg == end){
        tree[node] = arr[beg];
        return;
    }
    var left = node << 1;
    var right = (node << 1) + 1;
    var mid = (beg + end) >> 1;
    buildSegmentTree(arr, tree, left, beg, mid);
    buildSegmentTree(arr, tree, right, mid + 1, end);
    tree[node] = tree[right] + tree[left];
};
function query(tree, node, beg, end, i, j){
    if(i > end || beg > j){
        return 0;
    }
    if(beg >= i && end <= j){
        return tree[node];
    }
    var left = (node << 1);
    var right = (node << 1) + 1;
    var mid = (beg + end) >> 1;
    var p1 = query(tree, left, beg, mid, i, j);
    var p2 = query(tree, right, mid + 1, end, i, j);
    return p2 + p1;
};
function maxSum(arr,ranges){
    var n = arr.length;
    var tree = [];
    var res;
    buildSegmentTree(arr, tree, 1, 0, n - 1);
    for(var i = 0; i < ranges.length; i++){
        var range = ranges[i];
        var start = range[0], end = range[1];
        var q = query(tree, 1, 0, n - 1, start, end);
        res = (i == 0)? q : Math.max(q, res);
    }
    return res;
}
