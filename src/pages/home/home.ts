import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
import L from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
 
  }
 
 
    ionViewDidLoad() {
      this.loadmap();
    }
 
    loadmap() {
      L.Icon.extend({
        icon: {
            Url: '../assets/layout/znaczniki/koszykowka.png',
            iconsize:[5, 10],
        }
    });
    
      var koszykowka = L.icon({iconUrl: '../assets/layout/znaczniki/koszykowka.png'})
      var map = leaflet.map("map", {
      minZoom: 13,
      maxZoom: 20
      
      }).fitWorld();
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
      }).addTo(map);
      map.setView([53.967060, 18.526440],0);
      map.locate({
        maxZoom: 10
        //Koszykówka
      }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([53.970017,18.535273], {icon: koszykowka}).on('click', () => {
        alert('Boisko OSIR');
      })
      L.marker([53.978171, 18.537196], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko Do Koszykówki Przy Ul.Traugutta');
      })
     
      L.marker([53.957906, 18.530947], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Alei Jana Pawła II');
 
      })
 
      L.marker([53.957856, 18.530586], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Alei Jana Pawła II');
 
      })
 
      L.marker([53.961969, 18.522381], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. 60-Lecia');
 
      })
 
      L.marker([53.963644, 18.523914], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. 60-Lecia ');
 
      })
 
      L.marker([53.964561, 18.511589], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Konstytucji 3-go Maja');
 
      })
 
      L.marker([53.963770, 18.509677], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Konstytucji 3-go Maja');
 
      })
 
      L.marker([53.961813, 18.527325], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Mikołaja Kopernika');
 
      })
 
      L.marker([53.958559, 18.528053], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Mikołaja Kopernika');
 
      })
 
      L.marker([53.961909, 18.499126], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Piastów');
 
      })
 
      L.marker([53.961512, 18.535393], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Szumana');
 
      })
 
      L.marker([53.962505, 18.535623], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Os. Szumana');
 
      })
 
      L.marker([53.970535, 18.515540], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Piekiełkach');
 
      })
 
      L.marker([53.977702, 18.521352], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na placu zabaw');
 
      })
 
      L.marker([53.960612, 18.537954], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko obok Polpharmy');
 
      })
 
      L.marker([53.982639, 18.492626], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko ORLIK Żabno');
 
      })
 
      L.marker([53.958924, 18.530681], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko na Alei Jana Pawła II');
 
      })
 
      L.marker([53.968644, 18.513225], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko przy ulicy Ks. Piotra Ściegiennego');
 
      })
 
      L.marker([53.952400, 18.527250], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko przy ulicy Południowej');
 
      })
 
      L.marker([53.957179, 18.533125], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP 4 Filia');
 
      })
 
      L.marker([53.960918, 18.500472], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP1');
 
      })
 
      L.marker([53.972633, 18.537247], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP3');
 
      })
 
      L.marker([53.975121, 18.530976], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP3');
 
      })
 
      L.marker([53.971949, 18.536903], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP3');
 
      })
 
      L.marker([53.962934, 18.528891], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP4');
 
      })
 
      L.marker([53.983834, 18.492077], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP6');
 
      })
 
      L.marker([53.957562, 18.527770], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko PSP8');
 
      })
 
      L.marker([53.982568, 18.502943], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko w Parku Rekreacyjnym AKUKU');
 
      })
 
      L.marker([53.962593, 18.493185], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku');
 
      })
 
      L.marker([53.966655, 18.533734], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Boisko ZSZ');
 
      })
 
      L.marker([53.969677, 18.526001], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Hala sportowa im. Gerarda Podolskiego');
 
      })
 
      L.marker([53.970017, 18.535273], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Miejska Hala Sportowa im. Andrzeja Grubby (OSIR)');
 
      })
 
      L.marker([53.963770, 18.531611], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna I Liceum Ogólnokształcące');
 
      })
 
      L.marker([53.964967, 18.547153], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna II Liceum Ogólnokształcące');
 
      })
 
      L.marker([53.971403, 18.531161], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna MOS');
 
      })
 
      L.marker([53.961259, 18.501102], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna PSP1');
 
      })
 
      L.marker([53.972769, 18.536707], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna PSP3');
 
      })
 
      L.marker([53.975370, 18.530597], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna PSP3');
 
      })
 
      L.marker([53.962934, 18.528891], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna PSP4');
 
      })
 
      L.marker([53.957562, 18.527770], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna PSP8');
 
      })
 
      L.marker([53.966320, 18.535633], {icon: koszykowka}).addTo(map).on('click', () => {
        alert('Sala gimnastyczna ZSE');
 
      })
 
 
 
      markerGroup.addLayer(marker);
      map.addLayer(markerGroup);
      })
 
   
    }
 
}