class PaginationHelper {
	constructor(collection, itemsPerPage) {
	  this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	  return this.collection.length;
	}
	pageCount() {
	  return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
    let pageCount = Math.ceil(this.collection.length / this.itemsPerPage);
    console.log(this.collection)
	  if (pageIndex >= pageCount || pageIndex < 0) {
      return -1;
    }
    if (pageIndex == (pageCount - 1)) {
      let itemCount = this.collection.length % this.itemsPerPage;
      return itemCount == 0 ? this.itemsPerPage : itemCount
    }
    return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
    if (this.collection.length == 0 || itemIndex >= this.collection.length) {
      return -1;
    }
    let possibleIndex = Math.floor(itemIndex / this.itemsPerPage);
	  return possibleIndex > this.pageCount() || possibleIndex < 0 ? -1 : possibleIndex
	}
}
