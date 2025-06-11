class BonbonBox {
  constructor(bonbon1 = 0, bonbon2 = 0) {
    this.bonbon1 = bonbon1;
    this.bonbon2 = bonbon2;
  }

  retirerBonbons1(n) {
    if (n <= this.bonbon1) {
      this.bonbon1 -= n;
    }
  }
  ajouterBonbons2(n) {
    this.bonbon2 += n;
  }

  getQuantiteBonbons1() {
    return this.bonbon1;
  }

  getQuantiteBonbons2() {
    return this.bonbon2;
  }
}
