import { Component, Input } from '@angular/core';
import { GetApiService } from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';
  articles:any=[];
  selectedTeam = 'IN';
  value=''
  catagory='';
	onSelected(value:string): void {
		console.log(value);
    this.selectedTeam = value;
    this.api()
}

onPress(value:string){
  this.catagory=value;
  console.log(value);
  this.api()
}
   

  
  constructor(public data:GetApiService){
    this.api()
      
  }
  Search(value:string){
    this.value = value;
    this.data.apiSearchCall(this.value).subscribe(data => {
      this.articles =data;
      this.articles=this.articles.articles;
	})
  }

  api(){
    this.data.apiCall(this.selectedTeam,this.catagory).subscribe(data => {
      this.articles =data;
      this.articles=this.articles.articles;
      console.log(this.articles);
	})
  }

  go(data:any){
    data=data.slice(0,10)
    var year=data.slice(0,4)
    var month=data.slice(5,7)
    var day=data.slice(8,10)
    if(month=="01")
    {
      month="Jan"
    }
    if(month=="02")
    {
      month="Feb"
    }
    if(month=="03")
    {
      month="Mar"
    }
    if(month=="04")
    {
      month="Apr"
    }
    if(month=="05")
    {
      month="May"
    }
    if(month=="06")
    {
      month="Jun"
    }
    if(month=="07")
    {
      month="Jul"
    }
    if(month=="08")
    {
      month="Aug"
    }
    if(month=="09")
    {
      month="Sep"
    }
    if(month=="10")
    {
      month="Oct"
    }
    if(month=="11")
    {
      month="Nov"
    }
    if(month=="12")
    {
      month="Dec"
    }

    var str=day+", "+month+" "+year;
    return str;
  }
}
