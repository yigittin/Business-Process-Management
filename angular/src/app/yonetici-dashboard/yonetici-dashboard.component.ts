import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { DeveloperDto, DevelopersServiceProxy, GorevDto, ProjeDto, YoneticiDashboardServiceProxy, YoneticiDashDto } from '@shared/service-proxies/service-proxies';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-yonetici-dashboard',
  templateUrl: './yonetici-dashboard.component.html',
  styleUrls: ['./yonetici-dashboard.component.css']
})
export class YoneticiDashboardComponent extends AppComponentBase implements OnInit {
  @Output() onSave=new EventEmitter<any>();
  
  projeler:ProjeDto[]=[];
  gorevler:GorevDto[]=[];
  developerlar:DeveloperDto[]=[];
  yonetici=new YoneticiDashDto;
  constructor(
    injector:Injector,
    private _dashboardServiceProxy:YoneticiDashboardServiceProxy,
    private _developerServiceProxy:DevelopersServiceProxy,
    private _modalService:BsModalService,
  ) { 
    super(injector)
  }
  
  ngOnInit(){
    
    this._dashboardServiceProxy.getYoneticiDashboardId().subscribe(
      (res)=>{
        this.yonetici=res;
        console.log(res);
        console.log(this.yonetici);
        const id=this.yonetici.yoneticiId;
        this.getProjeler();
        this.getGorevler();
        this.getDeveloper(id);
      }
    )
  
   
  }
  getDeveloper(yonId:number){
    this._developerServiceProxy.getDeveloperByYoneticiId(yonId)
      .subscribe((res)=>{        
        this.developerlar=res;
        console.log(yonId);
        console.log(res);
      });
  }
  getProjeler(){
    this._dashboardServiceProxy.getYoneticiDashboardProjeler().subscribe(      
      (res)=>{
        this.projeler=res;
      }
    )
  }
  getGorevler(){
    this._dashboardServiceProxy.getYoneticiDashboardGorevler().subscribe(
      (res)=>{
        this.gorevler=res;
      }
    )
  }
}
