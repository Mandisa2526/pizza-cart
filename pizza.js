function calc() {
    return {
      total: 0,
      total_small: 50,
      total_medium: 80,
      total_large: 100,
      
      getTotalAmount() {
        return (this.total_small === 50 ) ? 0 : parseFloat(this.total_small);
      },
      
      getShippingAmount() {
        return (this.total_medium === 80) ? 0 : parseFloat(this.total_medium);
      },
      
      getTaxRate() {
        return (this.total_large === 100) ? 0 : parseFloat(this.total_large);
      },
      
      update_total() { 
        this.total = ((this.otal_small() + this.total_medium() + this.total_large()).toFixed(2)); 
     }
    }
  }