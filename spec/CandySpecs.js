describe("Candy Shop", function () {
  beforeEach(function () {
    box = new BonbonBox(510, 4);
  });

  it("devrait rester 490 bonbons de type 1 après avoir retiré 20 bonbons", function () {
    box.retirerBonbons1(20);
    expect(box.getQuantiteBonbons1()).toBe(490);
  });

  it("devrait avoir 604 bonbons de type 2 après avoir ajouté 600 bonbons", function () {
    box.ajouterBonbons2(600);
    expect(box.getQuantiteBonbons2()).toBe(604);
  });

  it("retirer des bonbons de type 1 ne doit pas changer la quantité de bonbons de type 2", function () {
    box.retirerBonbons1(20);
    expect(box.getQuantiteBonbons2()).toBe(4);
  });
});
