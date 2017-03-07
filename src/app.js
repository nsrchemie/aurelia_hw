export class App {
   configureRouter(config, router){
      config.title = 'Aurelia';

      config.map([
	 { route: '', name:'home', moduleId:
	 './components/home/home', nav:true, title:'Home'},
         { route: 'about',  name: 'about',
            moduleId: './components/about/about',    nav: true, title:'About' }
      ]);

      this.router = router;
   }

	constructor() {
		this.message = 'Hello World!';
		this.name = '';
 }

	greeting() {
	alert(` Hi ${this.name} `);
 }
}
