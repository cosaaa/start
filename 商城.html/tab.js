function Tab(btns, div) {
    this.btns = btns
    this.concent = div
    var that = this
    this.num = 0
    for (var i = 0; i < this.btns.length; i++) {
        this.btns[i].index = i;
        this.btns[i].onclick = function () {
            console.log(that.btns[this.index].index)
            that.btns[that.num].className = ''
            that.concent[that.num].classList.remove("active");
            that.num = this.index;
            that.concent[this.index].classList.add("active");      
            this.className = 'active'
        }
    }

}