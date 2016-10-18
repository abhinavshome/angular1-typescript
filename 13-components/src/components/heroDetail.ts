class HeroDetailController{
  onDelete;
  hero;
  onUpdate;

  delete () {
    this.onDelete({hero: this.hero});
  };

  update (prop, value) {
    this.onUpdate({hero: this.hero, prop: prop, value: value});
  };
}

export var heroDetail =  {
  templateUrl: 'src/components/heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
}
