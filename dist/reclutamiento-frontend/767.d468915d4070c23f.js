"use strict";(self.webpackChunkreclutamiento_frontend=self.webpackChunkreclutamiento_frontend||[]).push([[767],{767:(J,c,o)=>{o.r(c),o.d(c,{LoginModule:()=>C});var g=o(6814),a=o(707),u=o(57),r=o(6223),e=o(9291),m=o(6138),v=o(5219),d=o(3714);const y=function(){return{background:"url(../../../assets/img/fondo2.jpg)","background-size":"cover"}},h=function(){return{background:"#223a86"}},f=function(){return{color:"#223a86"}},x=function(){return{"background-color":"#5291de"}},Z=[{path:"",component:(()=>{var n;class i{constructor(t,l,p,L){this._fb=t,this._loginService=l,this._router=p,this._messageService=L,this.loginForm=this._fb.group({email:["",r.kI.required],password:["",r.kI.required]})}login(){this._loginService.login(this.loginForm.value).subscribe({next:({access_token:t})=>{localStorage.setItem("access_token",t),this._router.navigate(["/student-cases"])},error:t=>{this._messageService.add({severity:"error",summary:"Credenciales incorrectas",detail:"Aseg\xfarese de ingresar bien sus credenciales"})}})}get email(){return this.loginForm.get("email")}ngOnInit(){}}return(n=i).\u0275fac=function(t){return new(t||n)(e.Y36(r.qu),e.Y36(m.r),e.Y36(u.F0),e.Y36(v.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:22,vars:11,consts:[[1,"w-full","h-full",3,"ngStyle"],[1,"w-full","h-full","flex","align-items-center","justify-content-center"],[1,"h-18rem","w-3","xl:w-3","bg-white","flex","flex-column","shadow-2","border-round","align-items-center"],[1,"h-3rem","w-full","flex","align-items-center","justify-content-center","text-white","border-round-top",3,"ngStyle"],[1,"w-full","h-full","justify-content-center","align-items-center","mt-3",3,"formGroup","ngSubmit"],[1,"flex","flex-row","w-full"],[1,"flex","align-items-center","wp-2","justify-content-center"],[1,"flex","justify-content-star","wp-7",3,"ngStyle"],[1,"flex","align-items-center","wp-8","justify-content-center"],["formControlName","email","type","text","pInputText","",1,"wp-8"],[1,"flex","align-items-center","justify-content-center"],[1,"flex","flex-row"],[1,"flex","wp-2","align-items-center","wp-2","justify-content-center"],[1,"flex","wp-8","align-items-center","justify-content-center"],["formControlName","password","type","password","pInputText","",1,"wp-8"],[1,"flex","justify-content-center","align-items-center","mt-3"],["type","submit","label","Ingresar",1,"border-round",3,"ngStyle"]],template:function(t,l){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Ingreso a Portal "),e.qZA(),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return l.login()}),e.TgZ(6,"div",5)(7,"div",6)(8,"h6",7),e._uU(9,"Usuario"),e.qZA()(),e.TgZ(10,"div",8),e._UZ(11,"input",9),e.qZA(),e._UZ(12,"div",10),e.qZA(),e.TgZ(13,"div",11)(14,"div",12)(15,"h6",7),e._uU(16,"Contrase\xf1a"),e.qZA()(),e.TgZ(17,"div",13),e._UZ(18,"input",14),e.qZA(),e._UZ(19,"div",10),e.qZA(),e.TgZ(20,"div",15),e._UZ(21,"p-button",16),e.qZA()()()()()),2&t&&(e.Q6J("ngStyle",e.DdM(6,y)),e.xp6(3),e.Q6J("ngStyle",e.DdM(7,h)),e.xp6(2),e.Q6J("formGroup",l.loginForm),e.xp6(3),e.Q6J("ngStyle",e.DdM(8,f)),e.xp6(7),e.Q6J("ngStyle",e.DdM(9,f)),e.xp6(6),e.Q6J("ngStyle",e.DdM(10,x)))},dependencies:[g.PC,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.o,a.zx]}),i})()}];let S=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),i})();var w=o(5359),j=o(5597);let C=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[m.r],imports:[g.ez,S,r.u5,r.UX,d.j,a.hJ,w.x,j.uH]}),i})()}}]);