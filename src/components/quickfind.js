class quickfind {
  constructor(n) {
    this.array = this.initializeArray(n)
  }

  initializeArray(n) {
    var array = []
    for (var i = 0; i < n; i++) {
      array.push(i)
    }
    return array
  }

  root(r) {
    while (this.array[r] != r) {
      this.array[r] = this.array[this.array[r]]
      r = this.array[r]
    }
    return r
  }

  connected(a, b) {
    return this.root(a) == this.root(b)
  }

  union(a, b) {
    var aRoot = this.root(a)
    var bRoot = this.root(b)
    if (aRoot !== bRoot) {
      if (bRoot <= aRoot) {
        this.array[aRoot] = bRoot
      } else {
        this.array[bRoot] = aRoot
      }
    }
  }
}

module.exports = quickfind
