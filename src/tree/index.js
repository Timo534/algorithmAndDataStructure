function TreeNode (data) {
  this.value = data
  this.left = this.right = null
}

// 1
let one = new TreeNode('A')

// 2
let two = new TreeNode('B')

// 3
let three = new TreeNode('C')

// 4
let four = new TreeNode('D')

// 5
let five = new TreeNode('E')

// 6
let six = new TreeNode('F')

// 7
let seven = new TreeNode('G')

let tree = one
tree.left = two
tree.right = three

two.left = four
two.right = five

three.left = six
three.right = seven

// console.log(root)

// 广度遍历
let bfsResult = []
const BFS = function(node) {
  let queue = []
  queue.push(node)
  while (queue.length) {
    let task = queue.shift()
    if (task) {
      bfsResult.push(task.value)
      queue.push(task.left)
      queue.push(task.right)
    }
  }
}

BFS(tree)

// 深度遍历

// 前序遍历
let dlrResult = []
const DLR = function (node) {
  if (node) {
    dlrResult.push(node.value)
    DLR(node.left)
    DLR(node.right)
  }
}

DLR(tree)

// 中序遍历
let ldrResult = []
const LDR = function (node) {
  if (node) {
    LDR(node.left)
    ldrResult.push(node.value)
    LDR(node.right)
  }
}

LDR(tree)

// 后序遍历
let lrdResult = []
const LRD = function (node) {
  if (node) {
    LRD(node.left)
    LRD(node.right)
    lrdResult.push(node.value)
  }
}

LRD(tree)

console.log('---广度遍历---')
console.log(bfsResult)

console.log('---前序遍历---')
console.log(dlrResult)

console.log('---中序遍历---')
console.log(ldrResult)

console.log('---后序遍历---')
console.log(lrdResult)


module.exports = {
  BFS,
  DLR,
  LDR,
  LRD
}