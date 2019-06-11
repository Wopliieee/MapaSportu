import { PhotoPage } from './../photo/photo';
import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpisPage } from '../opis/opis';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import "rxjs/add/operator/map";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the CoToZaMiejscePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-co-to-za-miejsce',
  templateUrl: 'co-to-za-miejsce.html',
})
export class CoToZaMiejscePage {
  @ViewChild(Slides) slides: Slides;
  data: Observable<any>;
  items: any;
  _imageViewerCtrl: ImageViewerController;
  test: any;

  kilometry: any;
  x1: any;
  y1: any;
  x2: any;
  y2: any;
  radian: any;
  odległość: any;

  message: any;
  wathID: any;
  
  lat2: number;
  lon2: number;
  lon5: any;
  lat5: any;

  NazwaMiejsca: any;
  Dyscyplina: any;
  KategoriaMiejsca: any;
  Adres: any;
  Nawierzchnia: any;
  GodzinyOtwarcia: any;
  Koszt: any;
  StronaInternetowa: any;

  results: any;

  
  BoiskoNaPiekiełkach: any;
  BoiskoNaOsiedluKonstytucji3Maja: any;
  BoiskoOSIR: any;
  BoiskoDoKoszykówkiPrzyUlTrauguta: any;
  BoiskoNaAleiJanaPawlaII2: any;
  BoiskoNaAleiJanaPawlaII: any;
  BoiskoNaOs60Lecia2: any;
  BoiskoNaOs60lecia: any;
  OsKonstytucji3goMaja2: any;
  BoiskoNaOsKonstytucji3goMaja: any;
  BoiskoNaOsMikołajaKopernika2: any;
  BoiskoNaOsMikołajaKopernika: any;
  BoiskoNaOsPiastów: any;
  BoiskoNaOsSzumana2: any;
  BoiskoNaOsSzumana: any;
  BoiskoNaPlacuZabaw: any;
  BoiskoObokPolpharmy: any;
  BoiskoORLIKŻabno: any;
  BoiskoNaAleiJanaPawłaII3: any;
  BoiskoPrzyUlicyKsPiotraŚciegiennego: any;
  BoiskoNaUlicyPołudniowej: any;
  BoiskoPSP4: any;
  BoiskoPSP1: any;
  BoiskoPSP32DawnePG2: any;
  BoiskoPSP3: any;
  BoiskoPSP32: any;
  BoiskoPSP3DawnePG2: any;
  BoiskoPSP4AlejaJanaPawlaII: any;
  BoiskoPSP6: any;
  BoiskoPSP8: any;
  BoiskoWParkuRekreacyjnymAKUKU: any;
  BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku: any;
  BoiskoZSZ: any;
  HalaSportowaImGerardaPodolskiegoAGRO: any;
  MiejskaHalaSportowaImAndrzejaGrubbyOSiR: any;
  SalaGimnastycznaILiceumOgólnokształcące: any;
  SalaGimnastycznaIILiceumOgólnokształcące: any;
  SalaGimnastycznaMOS: any;
  SalaGimnastycznaPSP1: any;
  SalaGimnastycznaPSP32: any;
  SalaGimnastycznaPSP3: any;
  SalaGimnastycznaPSP4: any;
  SalaGimnastycznaPSP8: any;
  SalaGimnastycznaZSE: any;
  lat555: any;
  imageViewerCtrl: ImageViewerController;
  informationPHOTO: any;
  ZDJECIE: any;
  ZDJECIE2: any;
  ZDJECIE3: any;
  LiveRefreshX: any;
  nawigacja: any;
  PlaczabawFikumiku: any;
  BieżnaokólnaPSP8: any;
  BieżniaokólnaPSP1: any;
  BieżniaPSP3: any;
  BieżniaPSP4: any;
  StadionMiejskiimKazimierzaDeynyOSiR: any;
  BasenPSP1: any;
  BasenREN: any;
  CentrumRehabilitacyjnoLeczniczeMEDPHARMA: any;
  FitnessYankess: any;
  FLOWPARKStreetworkoutPark: any;
  NeptunGym: any;
  PumaKlubFitness: any;
  SiłowniaplenerowaOSiR: any;
  SiłowniaplenerowanaOsKonstytucji3goMaja: any;
  SiłowniaplenerowanaOsMikołajaKopernika2: any;
  SiłowniaplenerowanaOsMikołajaKopernika: any;
  Leszczynowa2: any;
  SiłowniaplenerowaobokPolpharmy: any;
  SiłowniaplenerowaParkNoweOblicze: any;
  SiłowniaplenerowaprzyOsJurandazeSpychowa: any;
  SiłowniaplenerowaprzyulTraugutta: any;
  SiłowniaplenerowaprzyulicySzturmowskiego: any;
  SiłowniaplenerowawParkuRekreacyjnymAKUKU: any;
  StreetWorkoutParkprzyOsJurandazeSpychowa: any;
  KlubFalangaStarogard: any;
  SiłowniaplenerowaprzyplacuzabawFikumiku: any;
  SalagimnastycznaPSP33: any;
  SalagimnastycznaPSP32: any;
  KręgielniaKULA: any;
  CastleBowlingClub: any;
  KręgielniaREN: any;
  SkoczniaPSP1: any;
  SkoczniaPSP4: any;
  SkoczniaPSP8: any;
  StadionMiejskiimKazimierzaDeynyOSiR3: any;
  StadionMiejskiimKazimierzaDeynyOSiR2: any;
  StadionMiejskiimKazimierzaDeynyOSiR4: any;
  StadionMiejskiimKazimierzaDeynyOSiR5: any;
  StadionMiejskiimKazimierzaDeynyOSiR6: any;
  StadionMiejskiimKazimierzaDeynyOSiR7: any;
  StadionMiejskiimKazimierzaDeynyOSiR8: any;
  StadionMiejskiimKazimierzaDeynyOSiR9: any;
  LodowiskoOSiR: any;
  BoiskoDoPilkiNoznejNaOs60Lecia: any;
  BoiskoNaOsKonstytucji3GoMaja: any;
  BoiskoNaOsMikolajaKopernika: any;
  BoiskoNaOsMikolajaKopernika2: any;
  BoiskoNaPlacuZabawJacekIAgatka: any;
  BoiskoNaPrzylesiu: any;
  BoiskoPrzyOsJurandaZeSpychowa: any;
  BoiskoPSP12: any;
  StadionMiejskiImKazimierzaDeynyOSiR: any;
  StadionWłókniarzImKazimierzaKropidłowskiego: any;
  BoiskoDoPiłkiNożnejPrzyUlZielonej: any;
  AdresBoiskoNaOsMikołajaKopernika: any;
  BoiskoPSP4AlejaJanaPawłaII: any;
  BoiskoNaOs60Lecia: any;
  BoiskoPSP3CzynneSezonowo: any;
  BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta: any;
  RolkowiskowParkuRekreacyjnymAKUKU: any;
  SkateparkOSiR: any;
  SkateparkParkNoweOblicze: any;
  DrążkidoStreetworkoutprzyulicySzturmowskiego: any;
  FLOWPARKSiłowniaplenerowa: any;
  HalasportowaimGerardaPodolskiegoAGRO: any;
  SalagimnastycznaMOS: any;
  StółdogrywszachyNaOsMikołajaKopernika: any;
  StółdogrywszachynaOsPiastów: any;
  FLOWPARKStółszachowy: any;
  EndorfinaPoleFitness: any;
  EstaFiesta: any;
  StółDoGryWPingPongaNaAleiJanaPawłaII: any;
  StółDoGryWPingPongaNaOs60lecia: any;
  StółDoPingPongaNaOs60lecia2: any;
  StółDoGryWPingPongaNaOsKonstytucji3goMaja: any;
  StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku: any;
  StółDoGryWPingPongaNaOsMikołajaKopernika: any;
  StółDoPingPongaNaOsKonstytucji3goMaja2: any;
  StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego: any;
  StółdogrywpingpongaWParkuRekreacyjnymAKUKU: any;
  StółdogrywpingpongaprzyulTraugutta: any;
  KortOSiR: any;
  KortTenisowyNaUlZblewskiej: any;
  ŚciankawspinaczkowaOSiR: any;
  NapisNaDole: any;
  BoiskoILO: any;
  BoiskoPSP1filia: any;
  BoiskoPSP1filiaSiatkówka: any;
  SiłowniaplenerowaILO: any;
  SiłowniaplenerowaILO2: any;
  SalagimnastycznaPSP1filia: any;


  constructor(private screenOrientation: ScreenOrientation, private photoViewer: PhotoViewer, public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public geo: Geolocation, imageViewerCtrl: ImageViewerController, private iab: InAppBrowser) {
    
    this.imageViewerCtrl = imageViewerCtrl;
    this.NapisNaDole = "Szukam...";
    
    this.lat5 = navParams.get('data');
    this.lon5 = navParams.get('data2');

  
    this.LiveRefresh()
    this.refresh()
    


    this.screenOrientation.onChange().subscribe(
      () => {
        this.refresh()
      }
   );
    
  } 

  ionViewWillEnter(){
    this.LiveRefreshX = 1
    console.log("wszedłem")
    setTimeout(() => 
    {
      this.refresh()
      if (this.results === undefined || this.results.length == 0) {
      this.NapisNaDole = "Brak miejsc w promieniu 250 metrów";
      }
      if (this.results.length != 0) {
        this.NapisNaDole = "Wyświetlane są miejsca w promieniu 250 metrów";
      }
    },
    100); 
    setTimeout(() => 
    {
      this.refresh()
      if (this.results === undefined || this.results.length == 0) {
        this.NapisNaDole = "Brak miejsc w promieniu 250 metrów";
      }
      if (this.results.length != 0) {
        this.NapisNaDole = "Wyświetlane są miejsca w promieniu 250 metrów";
      }
    },
    500); 
    setTimeout(() => 
    {
      this.refresh()
      if (this.results === undefined || this.results.length == 0) {
        this.NapisNaDole = "Brak miejsc w promieniu 250 metrów";
      }
      if (this.results.length != 0) {
        this.NapisNaDole = "Wyświetlane są miejsca w promieniu 250 metrów";
      }
    },
    500); 
  }

  ionViewWillLeave(){
    this.LiveRefreshX = 0
    console.log("wyszedłem")
  }

  LiveRefresh(){
      if(this.LiveRefreshX == 1)
        console.log("refreshed")
        setTimeout(() => 
        {
          this.refresh()
          this.LiveRefresh()
          if (this.results === undefined || this.results.length == 0) {
            this.NapisNaDole = "Brak miejsc w promieniu 250 metrów";
          }
          if (this.results.length != 0) {
            this.NapisNaDole = "Wyświetlane są miejsca w promieniu 250 metrów";
          }
        },
        5000); 
  }

  ViewPhoto(photo){
    this.informationPHOTO = photo
    this.navCtrl.push(PhotoPage, {zdj: this.informationPHOTO});
    }

  doRefresh(refresher) {
    this.test = Math.floor(Math.random() * 6) + 1  
    this.refresh()
    refresher.complete();
  }
  

  refresh(){
    

   {  
      let GeoOption = { enableHighAccuracy : true};
      try
      {
        this.wathID = this.geo.watchPosition(GeoOption).subscribe(data =>
          {
            this.wathID.unsubscribe();
            this.lat5 = data.coords.latitude;
            this.lon5 = data.coords.longitude; 
            },
          error =>
          {
            this.message = "GPS error " + error;
          }
        );
        }catch(err)
        {
          alert("error " + err);
          this.message = "error " + err;
        }
      }

    interface Miejsce {
      odleglosc: any;
      zdjecie: string;
      zdjecie2: string;
      zdjecie3: string;

      Nazwa_Miejsca: string,
      Dyscyplina: string,
      Kategoria_Miejsca: string,
      Adres: string,
      Nawierzchnia: string,
      Godziny_Otwarcia: string,
      Koszt: string,
      Strona_Internetowa: string,
      
      Nawigacja: string,
    }

    this.ObliczKilometry(53.970017, 18.535273, "BoiskoOSIR")
    this.ObliczKilometry(53.978171, 18.537196, "BoiskoDoKoszykówkiPrzyUlTrauguta")
    this.ObliczKilometry(53.957906, 18.530947, "BoiskoNaAleiJanaPawlaII2")
    this.ObliczKilometry(53.957856, 18.530586, "BoiskoNaAleiJanaPawlaII")
    this.ObliczKilometry(53.961969, 18.522381, "BoiskoNaOs60Lecia2")
    this.ObliczKilometry(53.963644, 18.523914, "BoiskoNaOs60lecia")
    this.ObliczKilometry(53.964561, 18.511589, "OsKonstytucji3goMaja2")
    this.ObliczKilometry(53.963770, 18.509677, "BoiskoNaOsKonstytucji3goMaja")
    this.ObliczKilometry(53.961813, 18.527325, "BoiskoNaOsMikołajaKopernika2")
    this.ObliczKilometry(53.958559, 18.528053, "BoiskoNaOsMikołajaKopernika")
    this.ObliczKilometry(53.961909, 18.499126, "BoiskoNaOsPiastów")
    this.ObliczKilometry(53.961512, 18.535393, "BoiskoNaOsSzumana2")
    this.ObliczKilometry(53.962505, 18.535623, "BoiskoNaOsSzumana")
    this.ObliczKilometry(53.970535, 18.515540, "BoiskoNaPiekiełkach")
    this.ObliczKilometry(53.977702, 18.521352, "BoiskoNaPlacuZabaw")
    this.ObliczKilometry(53.960612, 18.537954, "BoiskoObokPolpharmy")
    this.ObliczKilometry(53.982639, 18.492626, "BoiskoORLIKŻabno")
    this.ObliczKilometry(53.958924, 18.530681, "BoiskoNaAleiJanaPawłaII3")
    this.ObliczKilometry(53.968644, 18.513225, "BoiskoPrzyUlicyKsPiotraŚciegiennego")
    this.ObliczKilometry(53.952400, 18.527250, "BoiskoNaUlicyPołudniowej")
    this.ObliczKilometry(53.957179, 18.533125, "BoiskoPSP4")
    this.ObliczKilometry(53.960918, 18.500472, "BoiskoPSP1")
    this.ObliczKilometry(53.972633, 18.537247, "BoiskoPSP32")
    this.ObliczKilometry(53.975121, 18.530976, "BoiskoPSP3")
    this.ObliczKilometry(53.971949, 18.536903, "BoiskoPSP3DawnePG2")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4AlejaJanaPawlaII")
    this.ObliczKilometry(53.983834, 18.492077, "BoiskoPSP6")
    this.ObliczKilometry(53.957562, 18.527770, "BoiskoPSP8")
    this.ObliczKilometry(53.982568, 18.502943, "BoiskoWParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.962593, 18.493185, "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.ObliczKilometry(53.966655, 18.533734, "BoiskoZSZ")
    this.ObliczKilometry(53.969677, 18.526001, "HalaSportowaImGerardaPodolskiegoAGRO")
    this.ObliczKilometry(53.970017, 18.535273, "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.ObliczKilometry(53.971029, 18.531611, "SalaGimnastycznaILiceumOgólnokształcące")
    this.ObliczKilometry(53.964967, 18.547153, "SalaGimnastycznaIILiceumOgólnokształcące")
    this.ObliczKilometry(53.971403, 18.531161, "SalaGimnastycznaMOS")
    this.ObliczKilometry(53.961259, 18.501102, "SalaGimnastycznaPSP1")
    this.ObliczKilometry(53.972769, 18.536707, "SalaGimnastycznaPSP32")
    this.ObliczKilometry(53.975370, 18.530597, "SalaGimnastycznaPSP3")
    this.ObliczKilometry(53.962934, 18.528891, "SalaGimnastycznaPSP4")
    this.ObliczKilometry(53.957562, 18.527770, "SalaGimnastycznaPSP8")
    this.ObliczKilometry(53.966320, 18.535633, "SalaGimnastycznaZSE")
    this.ObliczKilometry(53.973069, 18.542568, "PlaczabawFikumiku")
    this.ObliczKilometry(53.957562, 18.527770, "BieżnaokólnaPSP8")
    this.ObliczKilometry(53.960856, 18.501134, "BieżniaokólnaPSP1")
    this.ObliczKilometry(53.975393, 18.531086, "BieżniaPSP3")
    this.ObliczKilometry(53.962934, 18.528891, "BieżniaPSP4")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR")
    this.ObliczKilometry(53.961617, 18.501317, "BasenPSP1")
    this.ObliczKilometry(53.975631, 18.520472, "BasenREN")
    this.ObliczKilometry(53.960680, 18.487117, "CentrumRehabilitacyjnoLeczniczeMEDPHARMA")
    this.ObliczKilometry(53.963387, 18.517096, "FitnessYankess")
    this.ObliczKilometry(53.962796, 18.521749, "FLOWPARKStreetworkoutPark")
    this.ObliczKilometry(53.964124, 18.529760, "NeptunGym")
    this.ObliczKilometry(53.964129, 18.527410, "PumaKlubFitness")

// *------------------------------*//

    this.ObliczKilometry(53.970017, 18.535273, "SiłowniaplenerowaOSiR")
    this.ObliczKilometry(53.963727, 18.509962, "SiłowniaplenerowanaOsKonstytucji3goMaja")
    this.ObliczKilometry(53.958664, 18.527146, "SiłowniaplenerowanaOsMikołajaKopernika2")
    this.ObliczKilometry(53.961994, 18.527556, "SiłowniaplenerowanaOsMikołajaKopernika")
    this.ObliczKilometry(53.936062, 18.505666, "Leszczynowa2")
    this.ObliczKilometry(53.960612, 18.537954, "SiłowniaplenerowaobokPolpharmy")
    this.ObliczKilometry(53.962497, 18.531348, "SiłowniaplenerowaParkNoweOblicze")
    this.ObliczKilometry(53.961868, 18.506220, "SiłowniaplenerowaprzyOsJurandazeSpychowa")
    this.ObliczKilometry(53.977827, 18.537753, "SiłowniaplenerowaprzyulTraugutta")
    this.ObliczKilometry(53.961648, 18.492796, "SiłowniaplenerowaprzyulicySzturmowskiego")
    this.ObliczKilometry(53.982568, 18.502943, "SiłowniaplenerowawParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.962644, 18.505431, "StreetWorkoutParkprzyOsJurandazeSpychowa")
    this.ObliczKilometry(53.944776, 18.514056, "KlubFalangaStarogard")
    this.ObliczKilometry(53.973069, 18.542568, "SiłowniaplenerowaprzyplacuzabawFikumiku")
    this.ObliczKilometry(53.972733, 18.536966, "SalagimnastycznaPSP32")
    this.ObliczKilometry(53.972769, 18.536707, "SalagimnastycznaPSP33")
    this.ObliczKilometry(53.969680, 18.530878, "KręgielniaKULA")
    this.ObliczKilometry(53.963851, 18.526420, "CastleBowlingClub")
    this.ObliczKilometry(53.975631, 18.520472, "KręgielniaREN")
    this.ObliczKilometry(53.960801, 18.501393, "SkoczniaPSP1")
    this.ObliczKilometry(53.962934, 18.528891, "SkoczniaPSP4")
    this.ObliczKilometry(53.957562, 18.527770, "SkoczniaPSP8")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR3")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR2")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR4")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR5")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR6")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR7")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR8")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiimKazimierzaDeynyOSiR9")
    this.ObliczKilometry(53.970017, 18.535273, "LodowiskoOSiR")
    this.ObliczKilometry(53.963077, 18.521251, "BoiskoDoPilkiNoznejNaOs60Lecia")
    this.ObliczKilometry(53.963770, 18.509677, "BoiskoNaOsKonstytucji3GoMaja")
    this.ObliczKilometry(53.958335, 18.527997, "BoiskoNaOsMikolajaKopernika")
    this.ObliczKilometry(53.961813, 18.527325, "BoiskoNaOsMikolajaKopernika2")
    this.ObliczKilometry(53.974143, 18.525033, "BoiskoNaPlacuZabawJacekIAgatka")
    this.ObliczKilometry(53.936257, 18.503759, "BoiskoNaPrzylesiu")
    this.ObliczKilometry(53.962401, 18.506016, "BoiskoPrzyOsJurandaZeSpychowa")
    this.ObliczKilometry(53.961578, 18.500123, "BoiskoPSP12")
    this.ObliczKilometry(53.970017, 18.535273, "StadionMiejskiImKazimierzaDeynyOSiR")
    this.ObliczKilometry(53.969103, 18.519189, "StadionWłókniarzImKazimierzaKropidłowskiego")
    this.ObliczKilometry(53.977420, 18.540092, "BoiskoDoPiłkiNożnejPrzyUlZielonej")
    this.ObliczKilometry(53.961813, 18.527325, "AdresBoiskoNaOsMikołajaKopernika")
    this.ObliczKilometry(53.962934, 18.528891, "BoiskoPSP4AlejaJanaPawłaII")
    this.ObliczKilometry(53.963644, 18.523914, "BoiskoNaOs60Lecia")
    this.ObliczKilometry(53.972400, 18.536630, "BoiskoPSP3CzynneSezonowo")
    this.ObliczKilometry(53.977827, 18.537753, "BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta")
    this.ObliczKilometry(53.982568, 18.502943, "RolkowiskowParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.970017, 18.535273, "SkateparkOSiR")
    this.ObliczKilometry(53.962671, 18.532019, "SkateparkParkNoweOblicze")
    this.ObliczKilometry(53.961521, 18.493140, "DrążkidoStreetworkoutprzyulicySzturmowskiego")
    this.ObliczKilometry(53.962796, 18.521749, "FLOWPARKSiłowniaplenerowa")
    this.ObliczKilometry(53.969677, 18.526001, "HalasportowaimGerardaPodolskiegoAGRO")
    this.ObliczKilometry(53.971403, 18.531161, "SalagimnastycznaMOS")
    this.ObliczKilometry(53.959797, 18.527130, "StółdogrywszachyNaOsMikołajaKopernika")
    this.ObliczKilometry(53.961923, 18.499315, "StółdogrywszachynaOsPiastów")
    this.ObliczKilometry(53.962796, 18.521749, "FLOWPARKStółszachowy")
    this.ObliczKilometry(53.977260, 18.520005, "EndorfinaPoleFitness")
    this.ObliczKilometry(53.965009, 18.526954, "EstaFiesta")
    this.ObliczKilometry(53.957883, 18.530672, "StółDoGryWPingPongaNaAleiJanaPawłaII")
    this.ObliczKilometry(53.963771, 18.523742, "StółDoGryWPingPongaNaOs60lecia")
    this.ObliczKilometry(53.961841, 18.522213, "StółDoPingPongaNaOs60lecia2")
    this.ObliczKilometry(53.964545, 18.511944, "StółDoGryWPingPongaNaOsKonstytucji3goMaja")
    this.ObliczKilometry(53.962552, 18.492815, "StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.ObliczKilometry(53.959797, 18.527130, "StółDoGryWPingPongaNaOsMikołajaKopernika")
    this.ObliczKilometry(53.964178, 18.513076, "StółDoPingPongaNaOsKonstytucji3goMaja2")
    this.ObliczKilometry(53.968830, 18.513343, "StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego")
    this.ObliczKilometry(53.982568, 18.502943, "StółdogrywpingpongaWParkuRekreacyjnymAKUKU")
    this.ObliczKilometry(53.978171, 18.537196, "StółdogrywpingpongaprzyulTraugutta")
    this.ObliczKilometry(53.970017, 18.535273, "KortOSiR")
    this.ObliczKilometry(53.961181, 18.500359, "KortTenisowyNaUlZblewskiej")
    this.ObliczKilometry(53.970017, 18.535273, "ŚciankawspinaczkowaOSiR")
    this.ObliczKilometry(53.971048, 18.531133, "BoiskoILO")
    this.ObliczKilometry(53.966475, 18.519187, "BoiskoPSP1filia")
    this.ObliczKilometry(53.966272, 18.519094, "BoiskoPSP1filiaSiatkówka")
    this.ObliczKilometry(53.971245, 18.531742, "SiłowniaplenerowaILO")
    this.ObliczKilometry(53.970920, 18.531272, "SiłowniaplenerowaILO2")
    this.ObliczKilometry(53.966306, 18.519750, "SalagimnastycznaPSP1filia")

    const miejsca: Miejsce[] =[
      { odleglosc: this.BoiskoOSIR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59410583_355557525073206_7708766246715523072_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=a4a1d0cc93d817ffce20ad5566c0e014&oe=5D6F0D37",
          zdjecie2: "../../assets/imgs/Boisko (OSiR) (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko (OSiR) (2)/3.jpg",

          Nazwa_Miejsca: "Boisko (OSiR) (2)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Akryl",
          Godziny_Otwarcia: `7:00 – 22:00`,
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"
        },
        
      { odleglosc: this.BoiskoDoKoszykówkiPrzyUlTrauguta,

        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/56976978_287475395509441_4068162021697257472_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=6ad45a8267e78bec08b2a0bbd490cb90&oe=5D7255CA",
        zdjecie2: "../../assets/imgs/Boisko do koszykówki przy ul. Traugutta/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko do koszykówki przy ul. Traugutta/3.jpg",

        Nazwa_Miejsca: "Boisko do koszykówki przy ul. Traugutta",
        Adres: "ul. Romualda Traugutta 39",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Koszykówka",
        Nawierzchnia: "Kostka brukowa",
        Godziny_Otwarcia: "06:00 – 22:00",
        Koszt: "Bezpłatne",
        Strona_Internetowa: "-",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'41.4%22N+18%C2%B032'13.9%22E/@53.9781729,18.5358909,321m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.978171!4d18.537196"},
        
        { odleglosc: this.BoiskoNaAleiJanaPawlaII2,

        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58463017_405242086966178_4302820068175118336_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=d63f4602499a987564fd88b1cc23a0cf&oe=5D65EEB6",
        zdjecie2: "../../assets/imgs/Boisko na Alei Jana Pawła II (2)/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko na Alei Jana Pawła II (2)/3.jpg",

        Nazwa_Miejsca: "Boisko na Alei Jana Pawła II (2)",
        Adres: "Al. Jana Pawła II 25",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Koszykówka",
        Nawierzchnia: "Trawa naturalna",
        Godziny_Otwarcia: "6:00 – 22:00",
        Koszt: "Bezpłatne",
        Strona_Internetowa: "-",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B057'28.5%22N+18%C2%B031'51.4%22E/@53.9579091,18.5287583,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957906!4d18.530947"},
        
        { odleglosc: this.BoiskoNaAleiJanaPawlaII,

        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58698539_357345281561344_5429833067332108288_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=53de261240746f679fda39de2bba8f46&oe=5D72601E",
        zdjecie2: "../../assets/imgs/Boisko na Alei Jana Pawła II/2.jpg",
        zdjecie3: "../../assets/imgs/Boisko na Alei Jana Pawła II/3.jpg",

        Nazwa_Miejsca: "Boisko na Alei Jana Pawła II",
        Adres: "Al. Jana Pawła II 31",
        Kategoria_Miejsca: "Boisko zewnętrzne",
        Dyscyplina: "Koszykówka",
        Nawierzchnia: "Trawa naturalna",
        Godziny_Otwarcia: "6:00 – 22:00",
        Koszt: "Bezpłatne",
        Strona_Internetowa: "-",
        Nawigacja: "https://www.google.com/maps/place/53%C2%B057'28.3%22N+18%C2%B031'50.1%22E/@53.9578591,18.5283973,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957856!4d18.530586"},
          
        { odleglosc: this.BoiskoNaOs60Lecia2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58381675_402424277155767_1502330597513625600_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=94650dbabe19f598c7703e152c4546e8&oe=5D702B75",
          zdjecie2: "../../assets/imgs/Boisko na Os. 60-lecia (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. 60-lecia (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. 60-lecia (2)",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 2",
          Kategoria_Miejsca: "Boisko wielofunkcyjne",
          Dyscyplina: "Koszykówka; Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'43.1%22N+18%C2%B031'20.6%22E/@53.9619721,18.5201923,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961969!4d18.522381"},
        
          { odleglosc: this.BoiskoNaOs60lecia,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59320246_375849029937188_1674812537046040576_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=8d8dc3e2997a230c96d50c39e326f01b&oe=5D2CF10F",
          zdjecie2: "../../assets/imgs/Boisko na Os. 60-lecia/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. 60-lecia/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. 60-lecia",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 2",
          Kategoria_Miejsca: "Boisko wielofunkcyjne",
          Dyscyplina: "Koszykówka; Siatkówka plażowa",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.1%22N+18%C2%B031'26.1%22E/@53.9636471,18.5217253,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963644!4d18.523914"},
          
          { odleglosc: this.OsKonstytucji3goMaja2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59698683_2370810669856608_6655571344396124160_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=b4bf07c1e81f8fb57cc6dbdc1418cbca&oe=5D607C9A",
          zdjecie2: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Konstytucji 3-go Maja (2)",
          Adres: "Os. Konstytucji 3-go Maja 14",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Piasek",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'52.4%22N+18%C2%B030'41.7%22E/@53.9645641,18.5094003,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964561!4d18.511589"},
          
          { odleglosc: this.BoiskoNaOsKonstytucji3goMaja,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58722640_1223298177825283_9016269319432044544_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=59b21d4271233578593a1f1773e9a72b&oe=5D757877",
          zdjecie2: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Konstytucji 3-go Maja",
          Adres: "Os. Konstytucji 3-go Maja 22",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.6%22N+18%C2%B030'34.8%22E/@53.9637731,18.5074883,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96377!4d18.509677"},

          { odleglosc: this.BoiskoNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59680060_2285627204835355_7519850598372474880_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=6139f999598a54197850d40ac69169f3&oe=5D6B36A4",
          zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 27",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'30.8%22N+18%C2%B031'41.0%22E/@53.9585608,18.5268177,304m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958559!4d18.528053"},

          { odleglosc: this.BoiskoNaOsPiastów,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58543707_2612747108800769_2060645460883800064_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=27490fa273f76c1ee41c6169123afbdc&oe=5D5E9017",
          zdjecie2: "../../assets/imgs/Boisko na Os. Piastów/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Piastów/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Piastów",
          Adres: "Os. Piastów 7",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.9%22N+18%C2%B029'56.9%22E/@53.9619121,18.4969373,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961909!4d18.499126"},

          { odleglosc: this.BoiskoNaOsSzumana2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59974148_336210520412495_1673531876582621184_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=4980e7220d06c3a0a732f1440fc3988c&oe=5D59628D",
          zdjecie2: "../../assets/imgs/Boisko na Os. Szumana (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Szumana (2)/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Szumana (2)",
          Adres: "Os. Księdza Henryka Szumana 13",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.4%22N+18%C2%B032'07.4%22E/@53.9615151,18.5332043,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961512!4d18.535393"},

          { odleglosc: this.BoiskoNaOsSzumana,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58463141_422144321916495_3228516887654563840_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=b77d64b09d1a06f02028ba7767113b00&oe=5D6AD7BD",
          zdjecie2: "../../assets/imgs/Boisko na Os. Szumana/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Os. Szumana/3.jpg",

          Nazwa_Miejsca: "Boisko na Os. Szumana",
          Adres: "Os. Księdza Henryka Szumana 1",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.0%22N+18%C2%B032'08.2%22E/@53.9625081,18.5334343,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962505!4d18.535623"},

          { odleglosc: this.BoiskoNaPiekiełkach,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58380489_835681533455571_6369623313865506816_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=0aa52eee445e6287592f658d0e311b1c&oe=5D61C8D0",
          zdjecie2: "../../assets/imgs/Boisko na Piekiełkach/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Piekiełkach/3.jpg",

          Nazwa_Miejsca: "Boisko na Piekiełkach",
          Adres: "Władysława Jagiełły 29",
          Kategoria_Miejsca: "Boisko  zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'13.9%22N+18%C2%B030'55.9%22E/@53.9705381,18.5133513,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970535!4d18.51554"},

          { odleglosc: this.BoiskoNaPlacuZabaw,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58444847_807572109627643_8753228299406147584_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=cd3a3922bb8a1e5707dfdfd427685ad0&oe=5D2F8798",
          zdjecie2: "../../assets/imgs/Boisko na placu zabaw/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na placu zabaw/3.jpg",

          Nazwa_Miejsca: "Boisko na placu zabaw przy ul. Sadowa 6 - 10",
          Adres: "ul. Sadowa 6 - 10",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Beton",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'39.7%22N+18%C2%B031'16.9%22E/@53.9777051,18.5191633,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977702!4d18.521352"},

          { odleglosc: this.BoiskoObokPolpharmy,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60146686_1015325028676607_1722647576391450624_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=afdf4ba129209d8c3a2a12e4793b315a&oe=5D746E13",
          zdjecie2: "../../assets/imgs/Boisko obok Polpharmy/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko obok Polpharmy/3.jpg",

          Nazwa_Miejsca: "Boisko obok Polpharmy",
          Adres: "Pelplińska 19",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.2%22N+18%C2%B032'16.6%22E/@53.9606151,18.5357653,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960612!4d18.537954"},

          { odleglosc: this.BoiskoORLIKŻabno,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58800327_352375305628755_2750603030381461504_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=cc2490ee279d386b64074a26903a00a3&oe=5D72D0D3",
          zdjecie2: "../../assets/imgs/Boisko ORLIK Żabno/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko ORLIK Żabno/3.jpg",

          Nazwa_Miejsca: "Boisko ORLIK Żabno",
          Adres: "Ks. Franciszka Kalinowskiego 28",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Siatkówka",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: `Marzec – Kwiecień \n  \n Pon. - Pt.: 17:00 – 20:00 \n Sob. - Ndz.: 14:00 – 21:30 \n  \n Maj – Październik \n  \n Pon. - Pt.: 17:0 – 21:30 \n Sob.- Ndz.: 14:00 – 21:30 \n \n Listopad – Luty \n \n Zamknięte`,
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.5%22N+18%C2%B029'33.5%22E/@53.9826421,18.4904373,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982639!4d18.492626"},

          { odleglosc: this.BoiskoNaAleiJanaPawłaII3,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59650027_703247803443954_7163330190674755584_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=80170f48413b17e619d7102aa8215ea3&oe=5D6E1182",
          zdjecie2: "../../assets/imgs/Boisko na Alei Jana Pawła II (3)/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na Alei Jana Pawła II (3)/3.jpg",

          Nazwa_Miejsca: "Boisko przy Alei Jana Pawła II (3)",
          Adres: "Al. Jana Pawła II 15A",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Kostka brukowa",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'32.1%22N+18%C2%B031'50.5%22E/@53.9589271,18.5284923,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958924!4d18.530681"},
      
          { odleglosc: this.BoiskoPrzyUlicyKsPiotraŚciegiennego,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58761557_424335051717262_1015379579293925376_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=e2bb39dd75b1e8e7b983bd0648b6e2f6&oe=5D73B8A0",
          zdjecie2: "../../assets/imgs/Boisko przy ulicy Ks. Piotra Ściegiennego/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko przy ulicy Ks. Piotra Ściegiennego/3.jpg",

          Nazwa_Miejsca: "Boisko przy ulicy Ks. Piotra Ściegiennego",
          Adres: "Ks. Piotra Ściegiennego 24",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'07.1%22N+18%C2%B030'47.6%22E/@53.9686471,18.5110363,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.968644!4d18.513225"},

          { odleglosc: this.BoiskoNaUlicyPołudniowej,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59670574_2423564007667788_4674961061474992128_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=45bf30959bfa5d9c943629e4d4189f57&oe=5D5CE9A6",
          zdjecie2: "../../assets/imgs/Boisko na ulicy Południowej/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko na ulicy Południowej/3.jpg",

          Nazwa_Miejsca: "Boisko przy ulicy Południowej",
          Adres: "Południowa 40",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna",
          Nawierzchnia: "Trawa naturalna",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'08.6%22N+18%C2%B031'38.1%22E/@53.9528967,18.5245567,659m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.9524!4d18.52725"},

          { odleglosc: this.BoiskoPSP4,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59899126_409522506551496_1108409094911295488_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=05e1ed29f7e477a9005666bc3bfef22c&oe=5D6C2620",
          zdjecie2: "../../assets/imgs/Boisko PSP 4/2.jpg",
          zdjecie3: "../../assets/imgs/Boisko PSP 4/3.jpg",

          Nazwa_Miejsca: "Boisko PSP 4",
          Adres: "Henryka Sienkiewicza 19 ",
          Kategoria_Miejsca: "Boisko do koszykówki",
          Dyscyplina: "Koszykówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "https://czworkastg.edupage.org/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'25.8%22N+18%C2%B031'59.3%22E/@53.9571821,18.5309363,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957179!4d18.533125"},

          { odleglosc: this.BoiskoPSP1,

            zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59614496_2309043626035914_7497143703278977024_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=f6289a5814421fc369ad5ff4b5cdf269&oe=5D5E1603",
            zdjecie2: "../../assets/imgs/Boisko PSP1/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP1/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP1",
            Adres: "Zblewska 18",
            Kategoria_Miejsca: "Boisko zewnętrzne",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Asfalt",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B057'39.3%22N+18%C2%B030'01.7%22E/@53.9609211,18.4982833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960918!4d18.500472"},

          { odleglosc: this.BoiskoPSP32,

            zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59972659_1333835046770328_1979019633193123840_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=a1ce4c78f5a8030ce041dcaad9325cbe&oe=5D2EC2AB",
            zdjecie2: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP3 (2) (dawne PG2)/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP3 (2)",
            Adres: "Traugutta 2",
            Kategoria_Miejsca: "Boisko zewnętrzne",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Asfalt",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'21.5%22N+18%C2%B032'14.1%22E/@53.9726361,18.5350583,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972633!4d18.537247"},
          
            { odleglosc: this.BoiskoPSP3,

            zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58381029_380946925965549_909825943336386560_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=e6d238b56d1cdad6c7d7414e41596313&oe=5D60F1FA",
            zdjecie2: "../../assets/imgs/Boisko PSP3/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP3/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP3",
            Adres: "Wybickiego 17",
            Kategoria_Miejsca: "Boisko zewnętrzne (2)",
            Dyscyplina: "Koszykówka",
            Nawierzchnia: "Asfalt",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatne",
            Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'30.4%22N+18%C2%B031'51.5%22E/@53.9751241,18.5287873,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975121!4d18.530976"},
          
            { odleglosc: this.BoiskoPSP3DawnePG2,

            zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58419539_547324022462986_348770298125877248_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=c255561e3bd14e6322f69a2c570e3786&oe=5D6E305E",
            zdjecie2: "../../assets/imgs/Boisko PSP3 (3)/2.jpg",
            zdjecie3: "../../assets/imgs/Boisko PSP3 (3)/3.jpg",
  
            Nazwa_Miejsca: "Boisko PSP3 (3)",
            Adres: "Traugutta 2",
            Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
            Dyscyplina: "Koszykówka; Tenis ziemny",
            Nawierzchnia: "Tartan",
            Godziny_Otwarcia: "16:00 – 22:00",
            Koszt: "Bezpłatny (Możliwość rezerwacji)",
            Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'19.0%22N+18%C2%B032'12.9%22E/@53.9719521,18.5347143,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971949!4d18.536903"},

            { odleglosc: this.BoiskoPSP4AlejaJanaPawlaII,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58667578_2173537046064752_1956257702388695040_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=2bfe02ef32a104f8681fdb13a1291386&oe=5D7651F7",
              zdjecie2: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (2)/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko PSP4 aleja Jana Pawła II (2)/3.jpg",
    
              Nazwa_Miejsca: "Boisko PSP4 aleja Jana Pawła II",
              Adres: "Aleja Jana Pawła II ",
              Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
              Dyscyplina: "Koszykówka, siatkówka",
              Nawierzchnia: "Tartan",
              Godziny_Otwarcia: "6:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://czworkastg.edupage.org/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},

            { odleglosc: this.BoiskoPSP6,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59623610_871823323161433_1583353862767509504_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=799a76bd9ca25ba46f6ff94286a46597&oe=5D5E1961",
              zdjecie2: "../../assets/imgs/Boisko PSP6/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko PSP6/3.jpg",
    
              Nazwa_Miejsca: "Boisko PSP6",
              Adres: "Biskupa Konstantyna Dominika 32",
              Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
              Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
              Nawierzchnia: "Beton",
              Godziny_Otwarcia: "6:00 – 22:00",
              Koszt: "Bezpłatne",
              Strona_Internetowa: "http://www.psp6.stg.pl/index.html",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B059'01.8%22N+18%C2%B029'31.5%22E/@53.9838371,18.4898883,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.983834!4d18.492077"},

            { odleglosc: this.BoiskoPSP8,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59628306_449196758956036_5844875522584084480_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=df8d263dacf42ef6d1691ea34f4abea7&oe=5D6EF036",
              zdjecie2: "../../assets/imgs/Boisko PSP8 (2)/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko PSP8 (2)/3.jpg",
    
              Nazwa_Miejsca: "Boisko PSP8 (2)",
              Adres: "Al. Jana Pawła II 10",
              Kategoria_Miejsca: "Boisko zewnętrzne",
              Dyscyplina: "Koszykówka",
              Nawierzchnia: "Asfalt",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://psp8.edu.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
            
            { odleglosc: this.BoiskoWParkuRekreacyjnymAKUKU,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58383830_424735395021426_1792779315683786752_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=c1e8aa308a83330da501c90e9f3232b8&oe=5D5F097F",
              zdjecie2: "../../assets/imgs/Boisko w Parku Rekreacyjnym AKUKU/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko w Parku Rekreacyjnym AKUKU/3.jpg",
    
              Nazwa_Miejsca: "Boisko w Parku Rekreacyjnym AKUKU",
              Adres: "Stanisława Kryzana 14",
              Kategoria_Miejsca: "Boisko zewnętrzne",
              Dyscyplina: "Koszykówka",
              Nawierzchnia: "Kostka brukowa",
              Godziny_Otwarcia: "6:00 – 22:00",
              Koszt: "Bezpłatne",
              Strona_Internetowa: "-",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},
              
            { odleglosc: this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58420313_2874268162585054_9113258502838550528_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=d5ca4dc7f3f5b3d80bf0133276666fb9&oe=5D77F238",
              zdjecie2: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku/3.jpg",
    
              Nazwa_Miejsca: "Boisko w Rodzinnym Parku Edukacji Sportowej i Wypoczynku",
              Adres: "Nierzwickiego 18",
              Kategoria_Miejsca: "Boisko zewnętrzne",
              Dyscyplina: "Koszykówka",
              Nawierzchnia: "Kostka brukowa",
              Godziny_Otwarcia: "7:00 – 21:00",
              Koszt: "Bezpłatne",
              Strona_Internetowa: "-",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.3%22N+18%C2%B029'35.5%22E/@53.9625961,18.4909963,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962593!4d18.493185"},
           
            { odleglosc: this.BoiskoZSZ,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59909556_444930762743540_6020110102361538560_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=8db16bfa0eab67249f3ecda3636216b7&oe=5D2C8B3B",
              zdjecie2: "../../assets/imgs/Boisko ZSZ/2.jpg",
              zdjecie3: "../../assets/imgs/Boisko ZSZ/3.jpg",
    
              Nazwa_Miejsca: "Boisko ZSZ",
              Adres: "ul. Ignacego Paderewskiego 11",
              Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
              Dyscyplina: "Piłka nożna; Piłka ręczna; Koszykówka",
              Nawierzchnia: "Beton",
              Godziny_Otwarcia: "15:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "-",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'60.0%22N+18%C2%B032'01.4%22E/@53.9666569,18.5324365,319m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.966655!4d18.533734"},

            { odleglosc: this.HalaSportowaImGerardaPodolskiegoAGRO,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59519045_576585839518008_3379895599867363328_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=b9e47dd47294b8d8ccdfd557f1a30f56&oe=5D688E56",
              zdjecie2: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/2.jpg",
              zdjecie3: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO)/3.jpg",
    
              Nazwa_Miejsca: "Hala sportowa im. Gerarda Podolskiego (AGRO)",
              Adres: "Generała Józefa Hallera 19A",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna; Sporty siłowe; Gimnastyka;  Boks; Kickboxing; Aikido; Brazylijskie Jujitsu; Kali Eskrima; Karate; Lekkoatletyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "Czynne całą dobę",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://starogard.pl/lokalizacje/hala-sportowa-im-gerarda-podolskiego/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'10.8%22N+18%C2%B031'33.6%22E/@53.9696801,18.5238123,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.969677!4d18.526001"},
            
            { odleglosc: this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58549574_2165665393528151_3939023251438567424_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=6f315a2d508caffb2e325af64b6e09c0&oe=5D71BF1B",
              zdjecie2: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/2.jpg",
              zdjecie3: "../../assets/imgs/Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)/3.jpg",
    
              Nazwa_Miejsca: "Miejska Hala Sportowa im. Andrzeja Grubby (OSiR)",
              Adres: "Olimpijczyków Starogardzkich 1",
              Kategoria_Miejsca: "Sala gimnastycza",
              Dyscyplina: "Koszykówka; Siatkówka; Tenis ziemny; Piłka ręczna; Piłka nożna; Sporty siłowe;Gimnastyka; Fitness",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "7:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://osir.com.pl/obiekty/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
           
            { odleglosc: this.SalaGimnastycznaILiceumOgólnokształcące,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna I Liceum Ogólnokształcące/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna I Liceum Ogólnokształcące",
              Adres: "Józefa Hallera 34",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet gumowy",
              Godziny_Otwarcia: "15:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://www.lo.internetdsl.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'15.7%22N+18%C2%B031'53.8%22E/@53.9710321,18.5294223,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971029!4d18.531611"},
      
            { odleglosc: this.SalaGimnastycznaIILiceumOgólnokształcące,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59914231_443028193113136_7340890559667503104_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=7cfd3fb5ed57cd0fb51b6cb4e9561a8c&oe=5D70541E",
              zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59609231_596722054173850_7209239151936274432_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=2c889eb85830112139f6f33e5005b90e&oe=5D2EF83B",
              zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60272396_430450314398382_8564265337703366656_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=914602ec7bee9c52860b030cb7300002&oe=5D73B6DB",
    
              Nazwa_Miejsca: "Sala gimnastyczna II Liceum Ogólnokształcące",
              Adres: "Tadeusza Kościuszki 131",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "15:00 – 22:00",
              Koszt:  "Potrzeba rezerwacji",
              Strona_Internetowa: "http://www.2lo.stg.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'53.9%22N+18%C2%B032'49.8%22E/@53.9649701,18.5449643,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964967!4d18.547153"},
            
            { odleglosc: this.SalaGimnastycznaPSP1,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59243937_883508015334863_102627822631124992_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=697d614a9ba33c6b38ebb23b8f6ad2b4&oe=5D5DE6A3",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP1/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP1/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP1",
              Adres: "Zblewska 18",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'40.5%22N+18%C2%B030'04.0%22E/@53.9612621,18.4989133,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961259!4d18.501102"},
            
          
            { odleglosc: this.SalaGimnastycznaPSP3,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59849515_1101237386743169_964543822392459264_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=18fa2ac21b3f6f3afa4774e36400ba96&oe=5D6EB17F",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP3",
              Adres: "Wybickiego 17",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Bezpłatne",
              Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'31.3%22N+18%C2%B031'50.2%22E/@53.9753731,18.5284083,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97537!4d18.530597"},
            
            { odleglosc: this.SalaGimnastycznaPSP4,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60049073_477728662969120_6158547618549989376_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=b13f283569899b37e0080c6933c32c6a&oe=5D72B2FE",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP4/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP4/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP4",
              Adres: "Aleja Jana Pawła II 4",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 - 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://czworkastg.edupage.org/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
            
            { odleglosc: this.SalaGimnastycznaPSP8,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP8/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP8/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna PSP8",
              Adres: "Aleja Jana Pawła II 10",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "16:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "http://psp8.edu.pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
            
              { odleglosc: this.SalaGimnastycznaZSE,

              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60161939_373268329951436_1336134385568579584_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=04afb74fe3403f3229a6bd949c63b04a&oe=5D5E04D7",
              zdjecie2: "../../assets/imgs/Sala gimnastyczna ZSE/2.jpg",
              zdjecie3: "../../assets/imgs/Sala gimnastyczna ZSE/3.jpg",
    
              Nazwa_Miejsca: "Sala gimnastyczna ZSE",
              Adres: "Jana Sobieskiego 6",
              Kategoria_Miejsca: "Sala gimnastyczna",
              Dyscyplina: "Koszykówka; Siatkówka; Piłka nożna; Piłka ręczna; Gimnastyka",
              Nawierzchnia: "Parkiet drewniany",
              Godziny_Otwarcia: "15:00 – 22:00",
              Koszt: "Potrzeba rezerwacji",
              Strona_Internetowa: "https://www.zse.com.pl/pl/",
              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'58.8%22N+18%C2%B032'08.3%22E/@53.9663231,18.5334443,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96632!4d18.535633"},
           
              { odleglosc: this.PlaczabawFikumiku,

                zdjecie: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58994423_2284441148265639_8087227512024727552_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=724eaed096159bfee7b1b10ab4fe6547&oe=5D688326',
                zdjecie2: '../../assets/imgs/Plac zabaw Fiku-miku/2.jpg',
                zdjecie3: '../../assets/imgs/Plac zabaw Fiku-miku/3.jpg',
      
                Nazwa_Miejsca: 'Boisko na placu zabaw "Fiku-miku" przy ul. Jana Buchholtza 6',
                Adres: "ul. Jana Buchholtza 6",
                Kategoria_Miejsca: "Boisko wielofunkcyjne",
                Dyscyplina: "Koszykówka",
                Nawierzchnia: "Tartan",
                Godziny_Otwarcia: "6:00 – 22:00",
                Koszt: "Bezpłatne",
                Strona_Internetowa: "-",
                Nawigacja: "https://www.google.pl/maps/place/Jana+Buchholza+6,+83-250+Starogard+Gdański/@53.9732109,18.5425676,17z/data=!4m5!3m4!1s0x47029c9a9b3ef00b:0x767aa42251651a23!8m2!3d53.9729004!4d18.5426218"},

                { odleglosc: this.BieżnaokólnaPSP8,

                  zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59909553_342572779786786_5778182085000822784_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=e8ce77ce1592485fb15b5d4f241000b4&oe=5D6E9E1C",
                  zdjecie2: "../../assets/imgs/Bieżna okólna PSP8/2.jpg",
                  zdjecie3: "../../assets/imgs/Bieżna okólna PSP8/3.jpg",
        
                  Nazwa_Miejsca: "Bieżna PSP8",
                  Adres: "Aleja Jana Pawła II 10",
                  Kategoria_Miejsca: "Bieżnia okólna",
                  Dyscyplina: "Bieganie",
                  Nawierzchnia: "Żwir",
                  Godziny_Otwarcia: "16:00 – 22:00",
                  Koszt: "Bezpłatne",
                  Strona_Internetowa: "http://psp8.edu.pl/",
                  Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
              
              { odleglosc: this.BieżniaokólnaPSP1,
        
                  zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58442795_862091604128063_6053534620190769152_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=d933992706448d8a173ab4ada746d632&oe=5D300666",
                  zdjecie2: "../../assets/imgs/Bieżnia okólna PSP1/2.jpg",
                  zdjecie3: "../../assets/imgs/Bieżnia okólna PSP1/3.jpg",
        
                  Nazwa_Miejsca: "Bieżnia PSP1",
                  Adres: "Zblewska 18",
                  Kategoria_Miejsca: "Bieżnia okólna",
                  Dyscyplina: "Bieganie",
                  Nawierzchnia: "Tartan",
                  Godziny_Otwarcia: "16:00 – 22:00",
                  Koszt: "Bezpłatne",
                  Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
                  Nawigacja: "https://www.google.com/maps/place/53%C2%B057'39.1%22N+18%C2%B030'04.1%22E/@53.9608591,18.4989453,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960856!4d18.501134"},
                
                { odleglosc: this.BieżniaPSP3,
        
                  zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59342885_1033387183522253_8032677557599993856_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=59befb3dcba4594c00937300b8065686&oe=5D6B80D0",
                  zdjecie2: "../../assets/imgs/Bieżnia PSP3/2.jpg",
                  zdjecie3: "../../assets/imgs/Bieżnia PSP3/3.jpg",
        
                  Nazwa_Miejsca: "Bieżnia PSP3",
                  Adres: "Wybickiego 17",
                  Kategoria_Miejsca: "Bieżnia okólna",
                  Dyscyplina: "Bieganie",
                  Nawierzchnia: "Żwir",
                  Godziny_Otwarcia: "16:00 – 22:00",
                  Koszt: "Bezpłatne",
                  Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
                  Nawigacja: "https://www.google.com/maps/place/53%C2%B058'31.4%22N+18%C2%B031'51.9%22E/@53.9753961,18.5288973,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975393!4d18.531086"},
                
                { odleglosc: this.BieżniaPSP4,
        
                  zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58379740_837516659934749_2541356793565544448_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=dbb1d146e9eabcc7ad5ecedfd2def388&oe=5D61301D",
                  zdjecie2: "../../assets/imgs/Bieżnia PSP4/2.jpg",
                  zdjecie3: "../../assets/imgs/Bieżnia PSP4/3.jpg",
        
                  Nazwa_Miejsca: "Bieżnia PSP4",
                  Adres: "Aleja Jana Pawła II 4",
                  Kategoria_Miejsca: "Bieżnia",
                  Dyscyplina: "Bieganie",
                  Nawierzchnia: "Tartan",
                  Godziny_Otwarcia: "6:00 – 22:00",
                  Koszt: "Potrzeba rezerwacji",
                  Strona_Internetowa: "https://czworkastg.edupage.org/",
                  Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},

                  { odleglosc: this.BasenPSP1,

                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59230021_2019338135029760_3833510632418705408_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=40cb7cf5d60b6015d2a33e2cb9f30f54&oe=5D2CC4F5",
                    zdjecie2: "../../assets/imgs/Basen PSP1/2.jpg",
                    zdjecie3: "../../assets/imgs/Basen PSP1/3.jpg",
          
                    Nazwa_Miejsca: "Basen PSP1",
                    Adres: "Zblewska 18",
                    Kategoria_Miejsca: "Basen wewnętrzny ",
                    Dyscyplina: "Pływanie; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. - Pt. od 16:00 do 21:15 \n Sobota, Niedziela oraz dni świąteczne: 10:00 – 19:00 `,
                    Koszt: `dzieci, młodzież szkół podstawowych i gimnazjum – 6 zł. \n osoby dorosłe - 14 zł. \n młodzież szkół średnich/studenci do 25 lat oraz osoby niepełnosprawne - 10 zł` ,
                    Strona_Internetowa: "https://basenpsp1.wordpress.com/about/cennik/",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.8%22N+18%C2%B030'04.7%22E/@53.9616201,18.4991283,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961617!4d18.501317"},
                  
                  { odleglosc: this.BasenREN,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59481801_654227601696436_6392134504479195136_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=505ea111e6ee1dacb352abf1840285d7&oe=5D301976",
                    zdjecie2: "../../assets/imgs/Basen REN/2.jpg",
                    zdjecie3: "../../assets/imgs/Basen REN/3.jpg",
          
                    Nazwa_Miejsca: "Basen REN ",
                    Adres: "Skarszewska 5 ",
                    Kategoria_Miejsca: "Basen wewnętrzny ",
                    Dyscyplina: "Pływanie; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. – Pt. 9:00 – 22:00 \n Sob. – Ndz. 9:00 – 21:00`,
                    Koszt: `Godz. 7:00 – 16:00 20 zł/ h BASEN + JACUZZI  Godz. 16:00 – 22:00 25zł/ h BASEN + JACUZZI `,
                    Strona_Internetowa: "http://ren.com.pl/basen-spa/",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'32.3%22N+18%C2%B031'13.7%22E/@53.9756341,18.5182833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975631!4d18.520472"},
          
                  { odleglosc: this.CentrumRehabilitacyjnoLeczniczeMEDPHARMA,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/57434126_1202474393253299_9000471201356709888_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=929cd3cdd40275e16e4d063db7e32b55&oe=5D2A16B6",
                    zdjecie2: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/2.jpg",
                    zdjecie3: "../../assets/imgs/Centrum Rehabilitacyjno - Lecznicze MEDPHARMA/3.jpg",
          
                    Nazwa_Miejsca: "Centrum Rehabilitacyjno - Lecznicze MEDPHARMA ",
                    Adres: "Leśna 1A ",
                    Kategoria_Miejsca: "Basen wewnętrzny ",
                    Dyscyplina: "Pływanie; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. - Pt.: 7:00 – 22:00 \n Sob. - Ndz.: 8:00 – 22:00 `,
                    Koszt: `Cennik Zajęć Fitness \n Poranne ( 7:00 – 13:00) 15 zł/ 1 wejście \n Wieczorne (13:00 – 22:00) 20 zł/ 1 wejście \n Cennik Aqua Fitness \n 25zł/ 1 wejście \n Basen \n 7:00 - 20:00 - 20 zł/h \n 20:00 - 22:00 - 30 zł/h`,
                    Strona_Internetowa: "http://fitness.medpharma.pl/oferta/cennik/ ",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.5%22N+18%C2%B029'13.6%22E/@53.9606831,18.4849283,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96068!4d18.487117"},
          
                  { odleglosc: this.FitnessYankess,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58805549_938616219825708_4349413904921657344_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=b06f6af85c3ed547ea6dd700373ba0e2&oe=5D729D68",
                    zdjecie2: "../../assets/imgs/Fitness Yankess/2.jpg",
                    zdjecie3: "../../assets/imgs/Fitness Yankess/3.jpg",
          
                    Nazwa_Miejsca: "Fitness Yankess ",
                    Adres: "Orlińskiego 4 ",
                    Kategoria_Miejsca: "Siłownia; Klub sportowy ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. - Pt.: 8:00 – 22:00 \n Sobota: 9:00 – 15:00  Ndz.: 11:00 – 15:00 `,
                    Koszt: `1 wejście: 29zł  Karnet 1 mies.: 100zł `,
                    Strona_Internetowa: "http://yankes.pl/ ",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'48.2%22N+18%C2%B031'01.6%22E/@53.9633901,18.5149073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963387!4d18.517096"},
          
                  { odleglosc: this.FLOWPARKStreetworkoutPark,
          
                    // zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58626020_445450169534312_8730037945613942784_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=fd4cb09a1ca593c5510a0b685d051e8c&oe=5D76288F",
                    // zdjecie2: "../../assets/imgs/FLOWPARK Streetworkout Park/2.jpg",
                    // zdjecie3: "../../assets/imgs/FLOWPARK Streetworkout Park/3.jpg",
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58626020_445450169534312_8730037945613942784_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=fd4cb09a1ca593c5510a0b685d051e8c&oe=5D76288F",
                    zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59422324_338099853514531_392767444889894912_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=aa23bf9447921b2aaa56c1636012bbd7&oe=5D601BB4",
                    zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59450348_315684459104302_6790683804278194176_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=26078831592a5ed8d40455ddaa6f7d46&oe=5D3054C9",
          
                    Nazwa_Miejsca: "FLOWPARK Streetworkout Park ",
                    Adres: "Os. 60-lecia Odzyskania Niepodległości 8 ",
                    Kategoria_Miejsca: "Streetworkout Park ",
                    Dyscyplina: "Sporty siłowe; Kalistenika; Streetworkout ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 - 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.1%22N+18%C2%B031'18.3%22E/@53.9627991,18.5195603,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962796!4d18.521749"},
          
                  { odleglosc: this.NeptunGym,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59295991_804161313276280_3266492666363248640_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=e5f3349492d1fdedfc726ad7a0b32cb2&oe=5D313ACF",
                    zdjecie2: "../../assets/imgs/Neptun Gym/2.jpg",
                    zdjecie3: "../../assets/imgs/Neptun Gym/3.jpg",
          
                    Nazwa_Miejsca: "Neptun Gym ",
                    Adres: "Pomorska 7 ",
                    Kategoria_Miejsca: "Siłownia; Klub sportowy ",
                    Dyscyplina: "Sporty siłowe; Fitness; Taniec ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. - Pt.: 6:00 – 22:00 \n Sobota: 9:00 – 21:00  Niedziela: 9:00 – 20:00 `,
                    Koszt: `129zł/ mies.  25zł/ 1 wejście`,
                    Strona_Internetowa: "http://neptungym.pl/cennik/ ",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'47.1%22E/@53.9641271,18.5275713,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964124!4d18.52976"},
          
                  { odleglosc: this.PumaKlubFitness,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58694245_2337184599852597_3738682320073261056_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=c02c714216ecf3c3ab2d067355d8ecc6&oe=5D62A957",
                    zdjecie2: "../../assets/imgs/Puma Klub Fitness/2.jpg",
                    zdjecie3: "../../assets/imgs/Puma Klub Fitness/3.jpg",
          
                    Nazwa_Miejsca: "Puma Klub Fitness ",
                    Adres: "Pomorska 3 ",
                    Kategoria_Miejsca: "Siłownia; Klub sportowy ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. - Pt.: 7:30 – 21:00 \n Sobota: 8:00 – 17:00  Niedziela: 10:00 – 15:00 `,
                    Koszt: `129zł/ mies.  20zł/ 1 wejście`,
                    Strona_Internetowa: "http://www.pumaclub.pl/",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'50.9%22N+18%C2%B031'38.7%22E/@53.9641321,18.5252213,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964129!4d18.52741"},
          
          // ---------------------------------------------------------------------------
                  
                  { odleglosc: this.SiłowniaplenerowaOSiR,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58675168_872516803103258_2423911316583350272_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=4311ba37d40647393ffbfef9413f6dca&oe=5D6D40BB",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa (OSiR)/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa (OSiR)/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa (OSiR) ",
                    Adres: "Olimpijczyków Starogardzkich 1 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "Czynne całą dobę ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
          
                  { odleglosc: this.SiłowniaplenerowanaOsKonstytucji3goMaja,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58758461_352689748706404_2235948910461845504_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=fe56176ffd74a9c8ee28ea20d85ce22c&oe=5D738B3A",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Konstytucji 3-go Maja/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa na Os. Konstytucji 3-go Maja ",
                    Adres: "Os. Konstytucji 3-go Maja ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.4%22N+18%C2%B030'35.9%22E/@53.9637301,18.5077733,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963727!4d18.509962"}, 
                  
                  { odleglosc: this.SiłowniaplenerowanaOsMikołajaKopernika2,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58579360_2335272373358261_6859489244784623616_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=95f48ab8a934fbfa8e8ce3ed6fb86edb&oe=5D653F17",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika (2)/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa na Os. Mikołaja Kopernika (2) ",
                    Adres: "Os. Mikołaja Kopernika 27 ",
                    Kategoria_Miejsca: "Siłownia  plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'31.2%22N+18%C2%B031'37.7%22E/@53.9586671,18.5249573,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958664!4d18.527146"},
          
                  { odleglosc: this.SiłowniaplenerowanaOsMikołajaKopernika,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58689299_567819123727133_8428206533317230592_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=0f66c1aa7f179134e8896e9dd05bd8fa&oe=5D71E057",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa na Os. Mikołaja Kopernika/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa na Os. Mikołaja Kopernika ",
                    Adres: "Os. Mikołaja Kopernika 10 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'43.2%22N+18%C2%B031'39.2%22E/@53.9619971,18.5253673,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961994!4d18.527556"},
          
                  { odleglosc: this.Leszczynowa2,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60171722_424255411485662_874231990281306112_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=1a58dfe5c544ea314ea0fd32cd242d3c&oe=5D6BC635",
                    zdjecie2: "../../assets/imgs/Leszczynowa 2/2.jpg",
                    zdjecie3: "../../assets/imgs/Leszczynowa 2/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa na Przylesiu ",
                    Adres: "Leszczynowa 2 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B056'09.8%22N+18%C2%B030'20.4%22E/@53.9360651,18.5034773,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.936062!4d18.505666"},
          
                  { odleglosc: this.SiłowniaplenerowaobokPolpharmy,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59551421_1381352328671363_6871539746196160512_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=ba8ca48f6a1420ce48835cb3aad43597&oe=5D782592",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa obok Polpharmy/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa obok Polpharmy ",
                    Adres: "Pelplińska 19 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.2%22N+18%C2%B032'16.6%22E/@53.9606151,18.5357653,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960612!4d18.537954"},
          
                  { odleglosc: this.SiłowniaplenerowaParkNoweOblicze,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59410323_316495075701289_8614898333493755904_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=9c0e49732ca8d84b57e3c322b17bb08d&oe=5D60834E",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa Park Nowe Oblicze/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa Park Nowe Oblicze ",
                    Adres: "Al. Jana Pawła II 3 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.0%22N+18%C2%B031'52.9%22E/@53.9625001,18.5291593,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962497!4d18.531348"},
          
                  { odleglosc: this.SiłowniaplenerowaprzyOsJurandazeSpychowa,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/57556888_605996723214139_6633415386232520704_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=dadf37d68524961d5dbfa98427b88c48&oe=5D2E4486",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa przy Os. Juranda ze Spychowa/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa przy Os. Juranda ze Spychowa ",
                    Adres: "Zblewska 16 ",
                    Kategoria_Miejsca: "Siłownia ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.7%22N+18%C2%B030'22.4%22E/@53.9625001,18.5291593,538m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.961868!4d18.50622"},
          
                  { odleglosc: this.SiłowniaplenerowaprzyulTraugutta,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285790_805281483198816_1529464143600418816_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=ee58bb74edbeeeefccc104e1fab0853d&oe=5D29CD0B",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa przy ul. Traugutta/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa przy ul. Traugutta ",
                    Adres: "ul. Romualda Traugutta 38 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "06:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'40.2%22N+18%C2%B032'15.9%22E/@53.9778286,18.5366265,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977827!4d18.537753"},
          
                  { odleglosc: this.SiłowniaplenerowaprzyulicySzturmowskiego,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59157494_670789763380152_3256393029291868160_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=bad6a213c44b6dd4c9182b629a7ad5f2&oe=5D5FA13F",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa przy ulicy Szturmowskiego/3.jpg",
          
                    Nazwa_Miejsca: "Siłownia plenerowa przy ulicy Szturmowskiego ",
                    Adres: "Szturmowskiego 16 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.9%22N+18%C2%B029'34.1%22E/@53.9616511,18.4906073,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961648!4d18.492796"},
          
                  { odleglosc: this.SiłowniaplenerowawParkuRekreacyjnymAKUKU,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58442630_466412973900066_1802526494853955584_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=b5e2048e5769049e26e2b1200b349ee0&oe=5D735B19",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa w Parku Rekreacyjnym AKUKU/3.jpg",
          
                    Nazwa_Miejsca: "Street Workout Park w Parku Rekreacyjnym AKUKU",
                    Adres: "Stanisława Kryzana 14 ",
                    Kategoria_Miejsca: "Siłownia plenerowa ",
                    Dyscyplina: "Sporty siłowe; Fitness ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},
          
                  { odleglosc: this.StreetWorkoutParkprzyOsJurandazeSpychowa,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58961653_441346383094491_1133507878766772224_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=b451cf86aed93c986dee0143ea911674&oe=5D2A323A",
                    zdjecie2: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/2.jpg",
                    zdjecie3: "../../assets/imgs/Street Workout Park przy Os. Juranda ze Spychowa/3.jpg",
          
                    Nazwa_Miejsca: "Street Workout Park przy Os. Juranda ze Spychowa ",
                    Adres: "Zblewska 16 ",
                    Kategoria_Miejsca: "Siłownia ",
                    Dyscyplina: "Sporty siłowe; Kalistenika ",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00 ",
                    Koszt: "Bezpłatne ",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.5%22N+18%C2%B030'19.6%22E/@53.9626471,18.5032423,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962644!4d18.505431"},
                  
                  { odleglosc: this.KlubFalangaStarogard,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59299091_2479711962059201_1485930402332803072_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=9f80a5258f7472af850d76c53ecd81b6&oe=5D773AEA",
                    zdjecie2: "../../assets/imgs/Klub Falanga Starogard/2.jpg",
                    zdjecie3: "../../assets/imgs/Klub Falanga Starogard/3.jpg",
          
                    Nazwa_Miejsca: "Klub Falanga Starogard",
                    Adres: "Rokocin 4d",
                    Kategoria_Miejsca: "Klub sportowy",
                    Dyscyplina: "Crossfit",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: `Pon. - Pt. 18:00 – 20:00 (zajęcia odbywają się o 18:00 i 19:00) \n Sob. 10:00 – 11:00`,
                    Koszt: `30 dni darmowy okres próbny (treningi poniedziałek/środa/ piątek godz. 19:00) \n Karnet Basic 150 zł/ msc (bez limitu treningów) dla początkujących, \n Karnet Pro 250 zł/ msc (bez limitu treningów) dla zaawansowanych`,
                    Strona_Internetowa: "https://www.facebook.com/pg/falangastarogard/about/?ref=page_internal",
                    Nawigacja: "https://www.google.com/maps/place/53%C2%B056'41.2%22N+18%C2%B030'50.6%22E/@53.9447791,18.5118673,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.944776!4d18.514056"},
                  
                  { odleglosc: this.SiłowniaplenerowaprzyplacuzabawFikumiku,
          
                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59914161_326754854690614_8140039997559406592_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=44e6482e701ae4e95a738ef07e359b48&oe=5D5A4CBF",
                    zdjecie2: "../../assets/imgs/Siłownia plenerowa przy placu zabaw Fiku-miku/2.jpg",
                    zdjecie3: "../../assets/imgs/Siłownia plenerowa przy placu zabaw Fiku-miku/3.jpg",
          
                    Nazwa_Miejsca: 'Siłownia plenerowa przy placu zabaw "Fiku-miku"',
                    Adres: "ul. Jana Buchholtza 6",
                    Kategoria_Miejsca: "Siłownia plenerowa",
                    Dyscyplina: "Sporty siłowe",
                    Nawierzchnia: "-",
                    Godziny_Otwarcia: "6:00 – 22:00",
                    Koszt: "Bezpłatne",
                    Strona_Internetowa: "-",
                    Nawigacja: "https://www.google.pl/maps/place/Jana+Buchholza+6,+83-250+Starogard+Gdański/@53.9732109,18.5425676,17z/data=!4m5!3m4!1s0x47029c9a9b3ef00b:0x767aa42251651a23!8m2!3d53.9729004!4d18.5426218"},
                    
                    { odleglosc: this.SalagimnastycznaPSP32,
              
                        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
                        zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3 (3)/2.jpg",
                        zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3 (3)/3.jpg",
              
                        Nazwa_Miejsca: "Sala gimnastyczna PSP3 (3)",
                        Adres: "Traugutta 2 ",
                        Kategoria_Miejsca: "Sala gimnastyczna ",
                        Dyscyplina: "Gimnastyka; Tenis stołowy ",
                        Nawierzchnia: "Parkiet drewniany ",
                        Godziny_Otwarcia: "16:00 – 22:00 ",
                        Koszt: "Potrzeba rezerwacji ",
                        Strona_Internetowa: "https://www.facebook.com/psp3starogard/ ",
                        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'21.8%22N+18%C2%B032'13.1%22E/@53.9727361,18.5347773,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972733!4d18.536966"},
                      
                    { odleglosc: this.SalagimnastycznaPSP33,
              
                        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59774317_2321313668188562_1537739493312823296_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=80068743e4d8c4c33e0d7cbb486318ce&oe=5D74D094",
                        zdjecie2: "../../assets/imgs/Sala gimnastyczna PSP3 (2)/2.jpg",
                        zdjecie3: "../../assets/imgs/Sala gimnastyczna PSP3 (2)/3.jpg",
              
                        Nazwa_Miejsca: "Sala gimnastyczna PSP3 (2)",
                        Adres: "Traugutta 2",
                        Kategoria_Miejsca: "Sala gimnastyczna",
                        Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka",
                        Nawierzchnia: "Parkiet drewniany",
                        Godziny_Otwarcia: "16:00 – 22:00",
                        Koszt: "Potrzeba rezerwacji",
                        Strona_Internetowa: "https://www.facebook.com/psp3starogard/",
                        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'22.0%22N+18%C2%B032'12.2%22E/@53.9727721,18.5345183,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.972769!4d18.536707"},
              
                        { odleglosc: this.KręgielniaKULA,

                          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285871_2502330279779467_4235989268947795968_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=def3eeca0b6b9b7c273fdeb58ca1e720&oe=5D2C0A7F",
                          zdjecie2: "../../assets/imgs/Kręgielnia KULA/2.jpg",
                          zdjecie3: "../../assets/imgs/Kręgielnia KULA/3.jpg",
                
                          Nazwa_Miejsca: "Kręgielnia KULA",
                          Adres: "Generała Józefa Hallera 16",
                          Kategoria_Miejsca: "Kręgielnia",
                          Dyscyplina: "Kręgle",
                          Nawierzchnia: "-",
                          Godziny_Otwarcia: `Pon. - Czw.: 14:00 – 1:00 \n Sobota: 12:00 – 1:00 \n Niedziela: 14:00 – 23:00`,
                          Koszt: `Kręgle \n Pon. - Czw.: 39zł/ h \n Pt. - Sob.: 49zł/ h \n Ndz.: 44zł/ h`,
                          Strona_Internetowa: "http://kulabowling.pl/oferta/bowling/",
                          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'10.9%22N+18%C2%B031'51.2%22E/@53.9696831,18.5286893,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.96968!4d18.530878"},
                        
                        { odleglosc: this.CastleBowlingClub,
                
                          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59339687_2297341593823248_4056743322859864064_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=b2076750a488576d6e0fc6a1668aded8&oe=5D5B32CB",
                          zdjecie2: "../../assets/imgs/Castle Bowling Club/2.jpg",
                          zdjecie3: "../../assets/imgs/Castle Bowling Club/3.jpg",
                
                          Nazwa_Miejsca: "Castle Bowling Club",
                          Adres: "Lubichowska 7",
                          Kategoria_Miejsca: "Kręgielnia",
                          Dyscyplina: "Kręgle",
                          Nawierzchnia: "-",
                          Godziny_Otwarcia: `Pon. - Czw.: 10:00 – 22:00 \n Pt. - Ndz.: 10:00 – 23:00`,
                          Koszt: "1 tor: 35zł",
                          Strona_Internetowa: "https://www.facebook.com/castle.stg/",
                          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.9%22N+18%C2%B031'35.1%22E/@53.9638541,18.5242313,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963851!4d18.52642"},
                        
                          { odleglosc: this.KręgielniaREN,
                
                            zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59765368_401542173762240_7232559492913692672_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=b14b8952475534bbc7708e24eb88c8ae&oe=5D729ACF",
                            zdjecie2: "../../assets/imgs/Kręgielnia REN/2.jpg",
                            zdjecie3: "../../assets/imgs/Kręgielnia REN/3.jpg",
                  
                            Nazwa_Miejsca: "Kręgielnia REN",
                            Adres: "Skarszewska 5",
                            Kategoria_Miejsca: "Kręgielnia",
                            Dyscyplina: "Kręgle",
                            Nawierzchnia: "-",
                            Godziny_Otwarcia:"pon. - czw. 12:00–23:00 \n pt. - sob. 12:00–01:00 \n niedz. - 12:00 - 22:00",
                            Koszt: "Pon.-Czw. 45 zł/h \n Pt.-Sb. 55 zł/h \n Ndz. 45 zł/h",
                            Strona_Internetowa: "http://ren.com.pl/bowling/",
                            Nawigacja: "https://www.google.com/maps/place/53%C2%B058'32.3%22N+18%C2%B031'13.7%22E/@53.9756341,18.5182833,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.975631!4d18.520472"},
                      
                            { odleglosc: this.SkoczniaPSP1,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58373829_352182078741862_2321981481972400128_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=237857b5daca245b65c1bbc4c758904e&oe=5D6689E7",
                              zdjecie2: "../../assets/imgs/Skocznia PSP1/2.jpg",
                              zdjecie3: "../../assets/imgs/Skocznia PSP1/3.jpg",
                    
                              Nazwa_Miejsca: "Skocznia PSP1",
                              Adres: "Zblewska 18",
                              Kategoria_Miejsca: "Skocznia",
                              Dyscyplina: "Skok w dal; Trójskok",
                              Nawierzchnia: "Tartan",
                              Godziny_Otwarcia: "16:00 – 22:00",
                              Koszt: "Bezpłatne",
                              Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'38.9%22N+18%C2%B030'05.0%22E/@53.9608041,18.4992043,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.960801!4d18.501393"},
                    
                            { odleglosc: this.SkoczniaPSP4,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59295970_427491334769747_3332204411861598208_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=58dd0c585b0af2ccb3bb1ab43e4fac01&oe=5D2BE27D",
                              zdjecie2: "../../assets/imgs/Skocznia PSP4/2.jpg",
                              zdjecie3: "../../assets/imgs/Skocznia PSP4/3.jpg",
                    
                              Nazwa_Miejsca: "Skocznia PSP4",
                              Adres: "Aleja Jana Pawła II 4",
                              Kategoria_Miejsca: "Skocznia",
                              Dyscyplina: "Skok w dal; Trójskok",
                              Nawierzchnia: "Tartan",
                              Godziny_Otwarcia: "6:00 – 22:00",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "https://czworkastg.edupage.org/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
                    
                            { odleglosc: this.SkoczniaPSP8,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59710960_2241901746127229_2241521609053569024_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=1caabd2ecf3a026160812e69b14a293d&oe=5D2D0292",
                              zdjecie2: "../../assets/imgs/Skocznia PSP8/2.jpg",
                              zdjecie3: "../../assets/imgs/Skocznia PSP8/3.jpg",
                    
                              Nazwa_Miejsca: "Skocznia PSP8",
                              Adres: "Aleja Jana Pawła II 10",
                              Kategoria_Miejsca: "Skocznia",
                              Dyscyplina: "Skok w dal; Trójskok",
                              Nawierzchnia: "Żwir",
                              Godziny_Otwarcia: "6:00 - 22:00",
                              Koszt: "Bezpłatne",
                              Strona_Internetowa: "http://psp8.edu.pl/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B057'27.2%22N+18%C2%B031'40.0%22E/@53.9575639,18.5264411,327m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.957562!4d18.52777"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR3,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59672836_2279703192273320_5456031607628496896_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=4f639e071a1fb8061fc9d5a36e6c509d&oe=5D6105E0",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR)(3)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (3)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (3)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Skocznia",
                              Dyscyplina: "Skok wzwyż",
                              Nawierzchnia: "-",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR2,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59581204_380601742796543_3608000007287865344_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=601efe6a60472e84ceb0429001862407&oe=5D5EC0BA",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (2)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (2)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (2)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Skocznia",
                              Dyscyplina: "Skok w dal, Trójskok",
                              Nawierzchnia: "Tartan",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR4,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59397082_478127236260466_4368382662344179712_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=8516efcd14d7debc8b020a88a4a797f9&oe=5D6856E1",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (4)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (4)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (4)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Rów z wodą",
                              Dyscyplina: "Bieganie",
                              Nawierzchnia: "-",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR5,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59672836_2279703192273320_5456031607628496896_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=4f639e071a1fb8061fc9d5a36e6c509d&oe=5D6105E0",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (5)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (5)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Rzutnia",
                              Dyscyplina: "Rzut oszczepem",
                              Nawierzchnia: "-",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR6,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59672836_2279703192273320_5456031607628496896_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=4f639e071a1fb8061fc9d5a36e6c509d&oe=5D6105E0",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (6)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (6)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (6)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Skocznia",
                              Dyscyplina: "Skok o tyczce",
                              Nawierzchnia: "-",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR7,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59672836_2279703192273320_5456031607628496896_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=4f639e071a1fb8061fc9d5a36e6c509d&oe=5D6105E0",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (7)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (7)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (7)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Rzutnia do pchnięcia kulą",
                              Dyscyplina: "Pchnięcie kulą",
                              Nawierzchnia: "Tartan",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR8,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59672836_2279703192273320_5456031607628496896_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=4f639e071a1fb8061fc9d5a36e6c509d&oe=5D6105E0",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (8)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (8)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (8)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Rzutnia",
                              Dyscyplina: "Rzut dyskiem, Rzut młotem",
                              Nawierzchnia: "Tartan",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Potrzeba rezerwacji",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                    
                            { odleglosc: this.StadionMiejskiimKazimierzaDeynyOSiR9,
                    
                              zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59991981_384269932178332_8942460083111985152_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=9f63d09f071cd5c9ec77551e10a114a8&oe=5D5D1582",
                              zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (9)/2.jpg",
                              zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR) (9)/3.jpg",
                    
                              Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR) (9)",
                              Adres: "Olimpijczyków Starogardzkich 1",
                              Kategoria_Miejsca: "Bieżnia okólna (400m)",
                              Dyscyplina: "Bieganie",
                              Nawierzchnia: "Tartan",
                              Godziny_Otwarcia: "Czynne całą dobę",
                              Koszt: "Bezpłatne",
                              Strona_Internetowa: "http://osir.com.pl/obiekty/",
                              Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                      
                              { odleglosc: this.LodowiskoOSiR,

                                zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59051863_428074967773177_7129024985506512896_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=f4f296f8963305a40b64cfc5774d4ec0&oe=5D5B6601",
                                zdjecie2: "../../assets/imgs/Lodowisko (OSiR)/2.jpg",
                                zdjecie3: "../../assets/imgs/Lodowisko (OSiR)/3.jpg",
                      
                                Nazwa_Miejsca: "Lodowisko (OSiR)",
                                Adres: "Olimpijczyków Starogardzkich 1",
                                Kategoria_Miejsca: "Sztuczne lodowisko zewnętrzne (otwarte sezonowo)",
                                Dyscyplina: "Łyżwiarstwo",
                                Nawierzchnia: "Lód",
                                Godziny_Otwarcia: `Pn.-Pt.: 8-19 \n Sob.-Nd. i święta: 10-20.30`,
                                Koszt: `Bilet ulgowy: 6zł \n Bilet normalny: 8zł`,
                                Strona_Internetowa: "http://osir.com.pl/lodowisko-2/",
                                Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},

                                { odleglosc: this.BoiskoDoPilkiNoznejNaOs60Lecia,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58382978_490087375062947_2274891619452846080_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=8e2839ee15954f5514415a59cc1a0827&oe=5D6EDD65",
                                    zdjecie2: "../../assets/imgs/Boisko do piłki nożnej na Os. 60-lecia/2.jpg",
                                    zdjecie3: "../../assets/imgs/Boisko do piłki nożnej na Os. 60-lecia/3.jpg",
                          
                                    Nazwa_Miejsca: "Boisko do piłki nożnej na Os. 60-lecia",
                                    Adres: "Os. 60-lecia Odzyskania Niepodległości 8",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Piasek",
                                    Godziny_Otwarcia: "6:00 – 22:00 ",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "-",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'47.1%22N+18%C2%B031'16.5%22E/@53.9630801,18.5190623,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963077!4d18.521251"},
                                
                                { odleglosc: this.BoiskoNaOsMikolajaKopernika,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59601883_688619581558217_2630446084710727680_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8148c23ef326018d3d5bb15c5d1c0281&oe=5D77FC92",
                                    zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (3)/2.jpg",
                                    zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (3)/3.jpg",
                          
                                    Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika (3)",
                                    Adres: "Os. Mikołaja Kopernika 27 (3) ",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Asfalt",
                                    Godziny_Otwarcia: "6:00 – 22:00",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "-",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'30.0%22N+18%C2%B031'40.8%22E/@53.9583381,18.5258083,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.958335!4d18.527997"},
                                
                                { odleglosc: this.BoiskoNaPlacuZabawJacekIAgatka,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59051894_559641671191473_1247339209488859136_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=87ab8bc6ca37e5acfc87fbbba8d6850f&oe=5D68B8CE",
                                    zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59636404_454673642007746_237563493069357056_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=87b3aa36c989d0573ab443be385ee08c&oe=5D6EA9E5",
                                    zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58441871_2276770415880110_7639941431611621376_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=75850e60a8428e18cd5d832d6526e45e&oe=5D604B91",
                          
                                    Nazwa_Miejsca: "Boisko na placu zabaw „Jacek i Agatka”",
                                    Adres: "Grunwaldzka 6",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Trawa naturalna",
                                    Godziny_Otwarcia: "6:00 – 22:00",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "-",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'26.9%22N+18%C2%B031'30.1%22E/@53.9741461,18.5228443,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.974143!4d18.525033"},
                                  
                          
                                { odleglosc: this.BoiskoNaPrzylesiu,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59243920_275515633336331_2845141213391093760_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=4f892213719909d9d1b649d1d029a989&oe=5D697DC2",
                                    zdjecie2: "../../assets/imgs/Boisko na Przylesiu/2.jpg",
                                    zdjecie3: "../../assets/imgs/Boisko na Przylesiu/3.jpg",
                          
                                    Nazwa_Miejsca: "Boisko na Przylesiu",
                                    Adres: "Leszczynowa 3",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Trawa naturalna",
                                    Godziny_Otwarcia: "Czynne całą dobę",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "-",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B056'10.5%22N+18%C2%B030'13.5%22E/@53.9362601,18.5015703,539m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.936257!4d18.503759"},

                                { odleglosc: this.BoiskoPrzyOsJurandaZeSpychowa,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58380891_693173511099040_1813004243666206720_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=fa9e585c388f68feadaf800ef4242840&oe=5D6CF20B",
                                    zdjecie2: "../../assets/imgs/Boisko przy Os. Juranda ze Spychowa/2.jpg",
                                    zdjecie3: "../../assets/imgs/Boisko przy Os. Juranda ze Spychowa/3.jpg",
                          
                                    Nazwa_Miejsca: "Boisko przy Os. Juranda ze Spychowa",
                                    Adres: "Zblewska 16",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Trawa naturalna",
                                    Godziny_Otwarcia: "6:00 – 22:00",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "-",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'44.6%22N+18%C2%B030'21.7%22E/@53.9624041,18.5038273,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962401!4d18.506016"},
                          
                                { odleglosc: this.BoiskoPSP12,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59188968_638035613289639_5888665737823780864_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=a2568095962bdabae0cc97faae8de961&oe=5D2D35CC",
                                    zdjecie2: "../../assets/imgs/Boisko PSP1 (2)/2.jpg",
                                    zdjecie3: "../../assets/imgs/Boisko PSP1 (2)/3.jpg",
                          
                                    Nazwa_Miejsca: "Boisko PSP1 (2)",
                                    Adres: "Zblewska 18",
                                    Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
                                    Dyscyplina: "Piłka nożna; Piłka ręczna",
                                    Nawierzchnia: "Asfalt",
                                    Godziny_Otwarcia: "16:00 – 22:00",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "https://psp1starogardgd.edupage.org/",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.7%22N+18%C2%B030'00.4%22E/@53.9615811,18.4979343,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961578!4d18.500123"},
                                { odleglosc: this.StadionMiejskiImKazimierzaDeynyOSiR,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59991981_384269932178332_8942460083111985152_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=9f63d09f071cd5c9ec77551e10a114a8&oe=5D5D1582",
                                    zdjecie2: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR)/2.jpg",
                                    zdjecie3: "../../assets/imgs/Stadion Miejski im. Kazimierza Deyny (OSiR)/3.jpg",
                          
                                    Nazwa_Miejsca: "Stadion Miejski im. Kazimierza Deyny (OSiR)",
                                    Adres: "Olimpijczyków Starogardzkich 1",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Murawa",
                                    Godziny_Otwarcia: "Czynne całą dobę",
                                    Koszt: "Potrzeba rezerwacji",
                                    Strona_Internetowa: "http://osir.com.pl/obiekty/",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
                                  
                                { odleglosc: this.StadionWłókniarzImKazimierzaKropidłowskiego,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60207573_464489510958027_4409547729148051456_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=7aa71a65d66077da0699c1f6e5dde73f&oe=5D5F1790",
                                    zdjecie2: "../../assets/imgs/Stadion Włókniarz im. Kazimierza Kropidłowskiego/2.jpg",
                                    zdjecie3: "../../assets/imgs/Stadion Włókniarz im. Kazimierza Kropidłowskiego/3.jpg",
                          
                                    Nazwa_Miejsca: "Stadion Włókniarz im. Kazimierza Kropidłowskiego",
                                    Adres: "Harcerska 11",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Murawa",
                                    Godziny_Otwarcia: "6:00 – 22:00",
                                    Koszt: "Potrzeba rezerwacji",
                                    Strona_Internetowa: "https://starogard.pl/lokalizacje/stadion-wlokniarz-im-kazimierza-kropidlowskiego/",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'08.8%22N+18%C2%B031'09.1%22E/@53.9691061,18.5170003,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.969103!4d18.519189"},
                                  
                                { odleglosc: this.BoiskoDoPiłkiNożnejPrzyUlZielonej,
                          
                                    zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59887278_2343262695994824_3192772907096866816_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=6b5636a2103ee5aff2289c653bcabc6e&oe=5D315F6F",
                                    zdjecie2: "../../assets/imgs/Boisko do piłki nożnej przy ul. Zielonej/2.jpg",
                                    zdjecie3: "../../assets/imgs/Boisko do piłki nożnej przy ul. Zielonej/3.jpg",
                          
                                    Nazwa_Miejsca: "Boisko do piłki nożnej przy ul. Zielonej",
                                    Adres: "ul. Zielona 11",
                                    Kategoria_Miejsca: "Boisko zewnętrzne",
                                    Dyscyplina: "Piłka nożna",
                                    Nawierzchnia: "Trawa naturalna",
                                    Godziny_Otwarcia: "06:00 – 22:00",
                                    Koszt: "Bezpłatne",
                                    Strona_Internetowa: "-",
                                    Nawigacja: "https://www.google.com/maps/place/53%C2%B058'38.7%22N+18%C2%B032'24.3%22E/@53.9774216,18.5389649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97742!4d18.540092"},
                          
                                  { odleglosc: this.AdresBoiskoNaOsMikołajaKopernika,
                            
                                      zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58378903_352122728764906_4348086472264384512_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=8bb70dc174e27185b8e7a91938f534c9&oe=5D6E4D00",
                                      zdjecie2: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (2)/2.jpg",
                                      zdjecie3: "../../assets/imgs/Boisko na Os. Mikołaja Kopernika (2)/3.jpg",
                                    
                                      Nazwa_Miejsca: "Boisko na Os. Mikołaja Kopernika (2)",
                                      Adres: "Os. Mikołaja Kopernika 10",
                                      Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
                                      Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna",
                                      Nawierzchnia: "Tartan",
                                      Godziny_Otwarcia: "6:00 – 22:00",
                                      Koszt: "Bezpłatne",
                                      Strona_Internetowa: "-",
                                      Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.5%22N+18%C2%B031'38.4%22E/@53.9618161,18.5251363,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961813!4d18.527325"},
                            
                                  { odleglosc: this.BoiskoPSP4AlejaJanaPawłaII,
                            
                                      zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59400748_2286217288318003_6571011787754307584_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=5f22416142a75a4f4fcdd04103f4e5bd&oe=5D6EED65",
                                      zdjecie2: "../../assets/imgs/Boisko PSP4  aleja Jana Pawła II/2.jpg",
                                      zdjecie3: "../../assets/imgs/Boisko PSP4  aleja Jana Pawła II/3.jpg",
                            
                                      Nazwa_Miejsca: "Boisko PSP4 aleja Jana Pawła II",
                                      Adres: "Aleja Jana Pawła II ",
                                      Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
                                      Dyscyplina: "Piłka nożna; Piłka ręczna; Siatkówka",
                                      Nawierzchnia: "Tartan",
                                      Godziny_Otwarcia: "6:00 – 22:00",
                                      Koszt: "Potrzeba rezerwacji",
                                      Strona_Internetowa: "https://czworkastg.edupage.org/",
                                      Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.6%22N+18%C2%B031'44.0%22E/@53.9629356,18.5277649,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962934!4d18.528891"},
                                    
                                      { odleglosc: this.BoiskoPSP3CzynneSezonowo,
                              
                                        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59863030_2339519576289528_3675213548230803456_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=4f2fcf9e432e038f50a1f23873f2b7ed&oe=5D6EC63A",
                                        zdjecie2: "../../assets/imgs/Boisko PSP3 (4)/2.jpg",
                                        zdjecie3: "../../assets/imgs/Boisko PSP3 (4)/3.jpg",
                              
                                        Nazwa_Miejsca: "Boisko PSP3 (4)",
                                        Adres: "Traugutta 2",
                                        Kategoria_Miejsca: "Boisko zewnętrzne",
                                        Dyscyplina: "Siatkówka plażowa",
                                        Nawierzchnia: "Piasek",
                                        Godziny_Otwarcia: "6:00 – 22:00",
                                        Koszt: "Potrzeba rezerwacji",
                                        Strona_Internetowa: "-",
                                        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'20.6%22N+18%C2%B032'11.9%22E/@53.9724031,18.5344413,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.9724!4d18.53663"},
                                      
                                      { odleglosc: this.BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta,
                              
                                        zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58381991_381534772454669_4728207239922319360_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=5c2389215a2d8e80b5b1cf389c423a10&oe=5D6AB81A",
                                        zdjecie2: "../../assets/imgs/Boisko do siatkówki plażowej przy ul. Traugutta/2.jpg",
                                        zdjecie3: "../../assets/imgs/Boisko do siatkówki plażowej przy ul. Traugutta/3.jpg",
                              
                                        Nazwa_Miejsca: "Boisko do siatkówki plażowej przy ul. Traugutta",
                                        Adres: "ul. Romualda Traugutta 38",
                                        Kategoria_Miejsca: "Boisko do siatkówki plażowej",
                                        Dyscyplina: "Siatkówka plażowa",
                                        Nawierzchnia: "Piasek",
                                        Godziny_Otwarcia: "06:00 – 22:00",
                                        Koszt: "Bezpłatne",
                                        Strona_Internetowa: "-",
                                        Nawigacja: "https://www.google.com/maps/place/53%C2%B058'40.2%22N+18%C2%B032'15.9%22E/@53.9778286,18.5366265,277m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.977827!4d18.537753"},

        { odleglosc: this.RolkowiskowParkuRekreacyjnymAKUKU,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59487086_1031344820399028_1775082551480680448_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=dcd0a2affb7c15925b4ec579ae754846&oe=5D73DCE6",
          zdjecie2: "../../assets/imgs/Rolkowisko w Parku Rekreacyjnym AKUKU/2.jpg",
          zdjecie3: "../../assets/imgs/Rolkowisko w Parku Rekreacyjnym AKUKU/3.jpg",

          Nazwa_Miejsca: "Rolkowisko w Parku Rekreacyjnym AKUKU",
          Adres: "Stanisława Kryzana 14",
          Kategoria_Miejsca: "Rolkowisko",
          Dyscyplina: "Wrotkarstwo; Scootering",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},
        
        { odleglosc: this.SkateparkOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/60003022_2196623787318755_9154877534800707584_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=0d3dc17b1acf7a3434f9139d7a69e89a&oe=5D2FB0C2",
          zdjecie2: "../../assets/imgs/Skatepark (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Skatepark (OSiR)/3.jpg",

          Nazwa_Miejsca: "Skatepark (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Skatepark zewnętrzny",
          Dyscyplina: "Skating; BMX; Scootering; Wrotkarstwo",
          Nawierzchnia: "Beton",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
          
        { odleglosc: this.SkateparkParkNoweOblicze,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59359849_363042557648413_5695809036079857664_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=c8c9746c4c743155ac16567ece132d02&oe=5D674CB2",
          zdjecie2: "../../assets/imgs/Skatepark Park Nowe Oblicze/2.jpg",
          zdjecie3: "../../assets/imgs/Skatepark Park Nowe Oblicze/3.jpg",

          Nazwa_Miejsca: "Skatepark Park Nowe Oblicze",
          Adres: "Al. Jana Pawła II 3",
          Kategoria_Miejsca: "Skatepark",
          Dyscyplina: "BMX; Scating; Wrotkarstwo; Scootering",
          Nawierzchnia: "Beton",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne (legitymacja skejcika)",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.6%22N+18%C2%B031'55.3%22E/@53.9626741,18.5298303,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962671!4d18.532019"},

        { odleglosc: this.DrążkidoStreetworkoutprzyulicySzturmowskiego,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58779131_283336282556743_5672523608891588608_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=53af047631ded00315d5f60cbaaa9734&oe=5D765385",
          zdjecie2: "../../assets/imgs/Drążki do Streetworkout przy ulicy Szturmowskiego/2.jpg",
          zdjecie3: "../../assets/imgs/Drążki do Streetworkout przy ulicy Szturmowskiego/3.jpg",

          Nazwa_Miejsca: "Drążki do Streetworkout przy ulicy Szturmowskiego",
          Adres: "Szturmowskiego 16",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'41.5%22N+18%C2%B029'35.3%22E/@53.9615241,18.4909513,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961521!4d18.49314"},

        { odleglosc: this.FLOWPARKSiłowniaplenerowa,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58633326_570652310093925_605725718860529664_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=b61f151d5fb7e3c12bec3351827f5336&oe=5D780AD0",
          zdjecie2: "../../assets/imgs/FLOWPARK Streetworkout Park (2)/2.jpg",
          zdjecie3: "../../assets/imgs/FLOWPARK Streetworkout Park (2)/3.jpg",

          Nazwa_Miejsca: "FLOWPARK Siłownia plenerowa",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 8",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sport siłowe",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 - 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.1%22N+18%C2%B031'18.3%22E/@53.9627991,18.5195603,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962796!4d18.521749"},

        { odleglosc: this.HalasportowaimGerardaPodolskiegoAGRO,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59800427_1142470749272579_38890696937046016_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=50bf28db830db0019c99d094f684a9c8&oe=5D6DE57E",
          zdjecie2: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO) (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Hala sportowa im. Gerarda Podolskiego (AGRO) (2)/3.jpg",

          Nazwa_Miejsca: "Hala sportowa im. Gerarda Podolskiego (AGRO) (2)",
          Adres: "Generała Józefa Hallera 19A",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Piłka ręczna; Piłka nożna halowa; Sporty siłowe; Gimnastyka;  Boks; Kickboxing; Aikido; Brazylijskie Jujitsu; Kali Eskrima; Karate; Lekkoatletyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "https://starogard.pl/lokalizacje/hala-sportowa-im-gerarda-podolskiego/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'10.8%22N+18%C2%B031'33.6%22E/@53.9696801,18.5238123,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.969677!4d18.526001"},
        
        { odleglosc: this.SalagimnastycznaMOS,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285488_316953192310280_5264287233694760960_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=f5a2250dacd893040e022e441790e832&oe=5D656E95",
          zdjecie2: "../../assets/imgs/Sala gimnastyczna MOS/2.jpg",
          zdjecie3: "../../assets/imgs/Sala gimnastyczna MOS/3.jpg",

          Nazwa_Miejsca: "Sala gimnastyczna MOS",
          Adres: "Józefa Hallera 36",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka; Siatkówka; Gimnastyka; Boks",
          Nawierzchnia: "Akryl",
          Godziny_Otwarcia: "15:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://mosstarogard.pl/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'17.1%22N+18%C2%B031'52.2%22E/@53.9714061,18.5289723,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971403!4d18.531161"},

        { odleglosc: this.StółdogrywszachyNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58463084_2409173205979236_706426531399860224_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=be0fe19977a9c754e329a5d9c0753bf4&oe=5D77131C",
          zdjecie2: "../../assets/imgs/Stół do gry w szachy na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w szachy na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Stół do gry w szachy na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 23",
          Kategoria_Miejsca: "Stół do gry w szachy ",
          Dyscyplina: "Szachy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'35.3%22N+18%C2%B031'37.7%22E/@53.9598001,18.5249413,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.959797!4d18.52713"},
        
        { odleglosc: this.StółdogrywszachynaOsPiastów,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58652574_603169466864774_2333531538089574400_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=7d643849df23c4c7045344e144f82338&oe=5D2B0581",
          zdjecie2: "../../assets/imgs/Stół do gry w szachy na Os. Piastów/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w szachy na Os. Piastów/3.jpg",

          Nazwa_Miejsca: "Stół do gry w szachy na Os. Piastów",
          Adres: "Os. Piastów 7",
          Kategoria_Miejsca: "Stół do gry w szachy",
          Dyscyplina: "Szachy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.9%22N+18%C2%B029'57.5%22E/@53.9619261,18.4971263,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961923!4d18.499315"},
        
        { odleglosc: this.FLOWPARKStółszachowy,

          // zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59394159_826680024375081_7449772829639180288_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=d2cea689758d69f81b9e571f50404ac9&oe=5D746483",
          // zdjecie2: "../../assets/imgs/FLOWPARK Stół szachowy/2.jpg",
          // zdjecie3: "../../assets/imgs/FLOWPARK Stół szachowy/3.jpg",
          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59394159_826680024375081_7449772829639180288_n.jpg?_nc_cat=104&_nc_ht=scontent-waw1-1.xx&oh=d2cea689758d69f81b9e571f50404ac9&oe=5D746483",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58833855_413084812608849_851623853665812480_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=558ab08d6873074bf344d204c468f2bb&oe=5D6B4089",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59397993_278103949736585_1378146845124984832_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=6cebe268adb97dacf75ecdd868ec6dcd&oe=5D311DE9",

          Nazwa_Miejsca: "FLOWPARK Stół szachowy",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 8",
          Kategoria_Miejsca: "Stół do gry w szachy (2)",
          Dyscyplina: "Szachy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 - 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'46.1%22N+18%C2%B031'18.3%22E/@53.9627991,18.5195603,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962796!4d18.521749"},

        { odleglosc: this.EndorfinaPoleFitness,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59450356_326414378044659_6093464763637956608_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=fbca6b341840f3e9b19b58929bc96331&oe=5D59F1D4",
          zdjecie2: "../../assets/imgs/Endorfina Pole Fitness/2.jpg",
          zdjecie3: "../../assets/imgs/Endorfina Pole Fitness/3.jpg",

          Nazwa_Miejsca: "Endorfina Pole Fitness",
          Adres: "Kocborowska 3",
          Kategoria_Miejsca: "Klub sportowy",
          Dyscyplina: "Taniec (Pole dance); Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Pon. – Czw.: 08:30 - 09:30 \n Pt. – Ndz.:  18:00 - 20:00`,
          Koszt: `1h pool dance 40 zł \n 4h mies. pool dance 130 zł`,
          Strona_Internetowa: "https://www.facebook.com/pg/EndorfinaPoleStudio/about/?ref=page_internal",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'38.1%22N+18%C2%B031'12.0%22E/@53.9772631,18.5178163,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97726!4d18.520005"},
        
      { odleglosc: this.EstaFiesta,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58978353_469872946886591_7973992095130058752_n.jpg?_nc_cat=111&_nc_ht=scontent-waw1-1.xx&oh=9b2a58d0d1560dcc128829dabc98b194&oe=5D6BA93A",
          zdjecie2: "../../assets/imgs/Esta Fiesta/2.jpg",
          zdjecie3: "../../assets/imgs/Esta Fiesta/3.jpg",

          Nazwa_Miejsca: "Esta Fiesta",
          Adres: "Lubichowska 14A",
          Kategoria_Miejsca: "Klub sportowy",
          Dyscyplina: "Taniec (Zumba; Sololatino; Salsation); Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "Zajęcia w godzinach ustalonych",
          Koszt: `1 wejście: 15zł \n Karnet – 4 wejścia: 55zł`,
          Strona_Internetowa: "https://www.facebook.com/pages/category/Sports---Recreation/Esta-Fiesta-Szko%C5%82a-ta%C5%84ca-ZumbaSolo-LatinoSalsation-1403257299929894/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'54.0%22N+18%C2%B031'37.0%22E/@53.9650121,18.5247653,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.965009!4d18.526954"},

        { odleglosc: this.StółDoGryWPingPongaNaAleiJanaPawłaII,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58420337_329197661116959_7182378490891599872_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=355de984b29e8cba99bd63c7117bb25b&oe=5D688BCC",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Alei Jana Pawła II/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Alei Jana Pawła II/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Alei Jana Pawła II",
          Adres: "Al. Jana Pawła II 25",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'28.4%22N+18%C2%B031'50.4%22E/@53.9606151,18.5357653,538m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d53.957883!4d18.530672"},
        
        { odleglosc: this.StółDoGryWPingPongaNaOs60lecia,

          // zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58382083_323064771690826_7753168494794899456_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=3af7f744eb1830842b23f39152e2ac1f&oe=5D2E4BCA",
          // zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Os. 60-lecia/2.jpg",
          // zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Os. 60-lecia/3.jpg",
          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58382083_323064771690826_7753168494794899456_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=3af7f744eb1830842b23f39152e2ac1f&oe=5D2E4BCA",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58462119_1009615909235649_4498498739526172672_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=eba5661b889b870d46bf2a9a17b086e1&oe=5D6F5712",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59064631_406711220183121_1500196569998163968_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=ce71f344a67c315d2bc2ef298ff7365c&oe=5D682E78",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Os. 60-lecia",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 2",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'49.6%22N+18%C2%B031'25.5%22E/@53.9637741,18.5215533,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.963771!4d18.523742"},
        
        { odleglosc: this.StółDoPingPongaNaOs60lecia2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58895183_992181727644168_1538142799331852288_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=fef3b064099550b6f59cacdb1ed96e12&oe=5D709ADA",
          zdjecie2: "../../assets/imgs/Stół do ping-ponga na Os. 60-lecia (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do ping-ponga na Os. 60-lecia (2)/3.jpg",

          Nazwa_Miejsca: "Stół do ping-ponga na Os. 60-lecia (2)",
          Adres: "Os. 60-lecia Odzyskania Niepodległości 9",
          Kategoria_Miejsca: "Stół do ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00 ",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'42.6%22N+18%C2%B031'20.0%22E/@53.9618441,18.5200243,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961841!4d18.522213"},
        
        { odleglosc: this.StółDoGryWPingPongaNaOsKonstytucji3goMaja,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59691394_444599389630729_4267899003351334912_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=a86c2d62c71faa71f568b02396006be9&oe=5D5D88BD",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Os. Konstytucji 3-go Maja/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Os. Konstytucji 3-go Maja/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Os. Konstytucji 3-go Maja",
          Adres: "Os. Konstytucji 3-go Maja 22",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'52.4%22N+18%C2%B030'43.0%22E/@53.9645481,18.5097553,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964545!4d18.511944"},
        
        { odleglosc: this.StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58441249_655041334968620_9087564861717610496_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=77d1b88f026fac08625818b9947e701a&oe=5D2BFA31",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga przy Rodzinnym Parku Edukacji Sportowej i Wypoczynku/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga przy Rodzinnym Parku Edukacji Sportowej i Wypoczynku/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga przy Rodzinnym Parku Edukacji Sportowej i Wypoczynku",
          Adres: "Nierzwickiego 18",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'45.2%22N+18%C2%B029'34.1%22E/@53.9625551,18.4906263,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.962552!4d18.492815"},
        
        { odleglosc: this.StółDoGryWPingPongaNaOsMikołajaKopernika,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58383334_579468612564979_2826886623130550272_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=ba5e2860b1233e28026b7aa5e3850c22&oe=5D61017A",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga na Os. Mikołaja Kopernika/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga na Os. Mikołaja Kopernika/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga na Os. Mikołaja Kopernika",
          Adres: "Os. Mikołaja Kopernika 23",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'35.3%22N+18%C2%B031'37.7%22E/@53.9598001,18.5249413,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.959797!4d18.52713"},
        
        { odleglosc: this.StółDoPingPongaNaOsKonstytucji3goMaja2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59717237_2051032538526652_2133297147683012608_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=49051238ad13fecf041e04041bebd421&oe=5D68884A",
          zdjecie2: "../../assets/imgs/Stół do ping-ponga na Os. Konstytucji 3-go Maja (2)/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do ping-ponga na Os. Konstytucji 3-go Maja (2)/3.jpg",

          Nazwa_Miejsca: "Stół do ping-ponga na Os. Konstytucji 3-go Maja (2)",
          Adres: "Os. Konstytucji 3-go Maja 6",
          Kategoria_Miejsca: "Stół do ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'51.0%22N+18%C2%B030'47.1%22E/@53.9641811,18.5108873,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.964178!4d18.513076"},
        
        { odleglosc: this.StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58805603_445539642848790_6344453753243959296_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=2ca4552183b75a035554fef152219376&oe=5D610402",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga przy ulicy Ks. Piotra Ściegiennego/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga przy ulicy Ks. Piotra Ściegiennego/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga przy ulicy Ks. Piotra Ściegiennego",
          Adres: "Ks. Piotra Ściegiennego 24",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'07.8%22N+18%C2%B030'48.0%22E/@53.9688364,18.5111446,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.9688333!4d18.5133333"},
        
        { odleglosc: this.StółdogrywpingpongaWParkuRekreacyjnymAKUKU,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59383509_1120697674798889_116428106603954176_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=3615ed97a1aee7ec5a63d6be94e76d1c&oe=5D2BE2FB",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga w Parku Rekreacyjnym AKUKU/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga w Parku Rekreacyjnym AKUKU/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga w Parku Rekreacyjnym AKUKU",
          Adres: "Stanisława Kryzana 14",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "6:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'57.2%22N+18%C2%B030'10.6%22E/@53.9825711,18.5007543,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.982568!4d18.502943"},
        
        { odleglosc: this.StółdogrywpingpongaprzyulTraugutta,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58543201_2403639386588739_7897298766795898880_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=ea38bcc0bd23ecac53fae1fa14039f7e&oe=5D5BD872",
          zdjecie2: "../../assets/imgs/Stół do gry w ping-ponga przy ul. Traugutta/2.jpg",
          zdjecie3: "../../assets/imgs/Stół do gry w ping-ponga przy ul. Traugutta/3.jpg",

          Nazwa_Miejsca: "Stół do gry w ping-ponga przy ul. Traugutta",
          Adres: "ul. Romualda Traugutta 38",
          Kategoria_Miejsca: "Stół do gry w ping-ponga",
          Dyscyplina: "Tenis stołowy",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "06:00 – 22:00",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'41.4%22N+18%C2%B032'13.9%22E/@53.9781729,18.5358909,321m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.978171!4d18.537196"},
 
        { odleglosc: this.KortOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59394667_427932204451596_8106676558460092416_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=e4be9c58f303aca49692aa77dacbe633&oe=5D765928",
          zdjecie2: "../../assets/imgs/Kort (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Kort (OSiR)/3.jpg",

          Nazwa_Miejsca: "Kort (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Kort zewnętrzny ",
          Dyscyplina: "Tenis ziemny",
          Nawierzchnia: "Akryl/ Mączka ceglana",
          Godziny_Otwarcia: "7:00 – 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "http://osir.com.pl/obiekty/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
        
        { odleglosc: this.KortTenisowyNaUlZblewskiej,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/58462896_2389475004663226_4260594028485017600_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=907d908bc3da2df33ef2ab18b0e971c0&oe=5D70B66D",
          zdjecie2: "../../assets/imgs/Kort tenisowy na Ul.Zblewskiej/2.jpg",
          zdjecie3: "../../assets/imgs/Kort tenisowy na Ul.Zblewskiej/3.jpg",

          Nazwa_Miejsca: "Kort tenisowy na Ul.Zblewskiej",
          Adres: "Zblewska 18",
          Kategoria_Miejsca: "Kort",
          Dyscyplina: "Tenis ziemny",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "Pon. - Ndz. \n 07:00 – 23:00",
          Koszt: `Pon. - Pt. \n 7:30 – 15:00 40zł/h \n 16:00 – 22:00 50zł/h \n Sob. - Ndz. \n 7:30 - 22:30 50zł/h`,
          Strona_Internetowa: "https://korty.org/starogard-gdanski",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B057'40.3%22N+18%C2%B030'01.3%22E/@53.9611841,18.4981703,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.961181!4d18.500359"},

        { odleglosc: this.ŚciankawspinaczkowaOSiR,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/59285770_422979581861296_6723841296970022912_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=1078702db8358edf72278a68ae7ba03e&oe=5D2E48D7",
          zdjecie2: "../../assets/imgs/Ścianka wspinaczkowa (OSiR)/2.jpg",
          zdjecie3: "../../assets/imgs/Ścianka wspinaczkowa (OSiR)/3.jpg",

          Nazwa_Miejsca: "Ścianka wspinaczkowa (OSiR)",
          Adres: "Olimpijczyków Starogardzkich 1",
          Kategoria_Miejsca: "Ścianka wspinaczkowa zewnętrzna",
          Dyscyplina: "Wspinaczka ściankowa",
          Nawierzchnia: "-",
          Godziny_Otwarcia: `Śr. - Ndz.: 13:00 – 20:00 \n Pon. - Wt.: Zamknięte`,
          Koszt: `STARTER - pierwsze wejście z asekuracją 9 zł \n Bilet normalny \n Pon - pt do godz. 16:00 - 9 zł \n Pon - pt po godz. 16:00 - 12 zł  \n Weekendy i święta - 12 zł \n Bilet ulgowy \n Bilet normalny \n Pon - pt do godz. 16:00 - 7 zł \n Pon - pt po godz. 16:00 - 9 zł \n Weekendy i święta - 9 zł`,
          Strona_Internetowa: "http://osir.com.pl/sciana-wspinaczkowa/",
          Nawigacja: "https://www.google.com/maps/place/53%C2%B058'12.1%22N+18%C2%B032'07.0%22E/@53.9700201,18.5330843,538m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.970017!4d18.535273"},
        


        { odleglosc: this.BoiskoILO,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/64328633_350759058976743_7237311427550117888_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=e6b02b25359d74806dc782ad562ac60b&oe=5D89597F",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62053825_332770054062851_7322606454391701504_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=c08ac852006e6d758dd23c5af4ea9f51&oe=5D9A4E87",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/61967921_415376065978649_6559416952308105216_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=0248336455be48eb440d76f938ed50b0&oe=5D8294FC",

          Nazwa_Miejsca: "Boisko I LO",
          Adres: "Generała Józefa Hallera 31",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Koszykówka; Piłka nożna; Piłka ręczna",
          Nawierzchnia: "Tartan",
          Godziny_Otwarcia: "15:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B058'15.8%22N+18%C2%B031'52.1%22E/@53.971049,18.53046,200m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971048!4d18.531133?hl=pl"},
        
        { odleglosc: this.BoiskoPSP1filia,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62073974_380842429443324_3345047983279308800_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=0395ae9118ce30598982ca6a0d8644e7&oe=5D9C5C25",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62261343_892430341098058_7259790161095950336_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=71e344b093b04cbff4e16337e8195f20&oe=5D8BDE0A",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62527691_1254149958075974_3580834991975694336_n.jpg?_nc_cat=109&_nc_ht=scontent-waw1-1.xx&oh=d07d40bc9eacb132ce34dab735199c72&oe=5D52E53A",

          Nazwa_Miejsca: "Boisko PSP1 (filia)",
          Adres: "2 Pułku Szwoleżerów Rokitniańskich 4",
          Kategoria_Miejsca: "Boisko wielofunkcyjne zewnętrzne",
          Dyscyplina: "Piłka ręczna, Piłka nożna",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://www.pg3.starogard.pl/",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B057'59.3%22N+18%C2%B031'09.1%22E/@53.9664759,18.5185349,196m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d53.9664754!4d18.5191872?hl=pl"},

        { odleglosc: this.BoiskoPSP1filiaSiatkówka,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62001804_372136643415972_6204333700797169664_n.jpg?_nc_cat=100&_nc_ht=scontent-waw1-1.xx&oh=2f4c484f2f55128aa2df34eacb9882d9&oe=5D8BABCF",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62644171_864036873961351_6091699222841655296_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=3b34c8d2b2fd187ed7915540e31d832f&oe=5D8E6E1C",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62055843_481088952434490_8961743489838612480_n.jpg?_nc_cat=105&_nc_ht=scontent-waw1-1.xx&oh=f866b31495102c5223cf72c6cfd2ea28&oe=5D55E279",

          Nazwa_Miejsca: "Boisko PSP1 (filia)",
          Adres: "2 Pułku Szwoleżerów Rokitniańskich 4",
          Kategoria_Miejsca: "Boisko zewnętrzne",
          Dyscyplina: "Siatkówka",
          Nawierzchnia: "Asfalt",
          Godziny_Otwarcia: "Czynne całą dobę",
          Koszt: "Bezpłatne",
          Strona_Internetowa: "http://www.pg3.starogard.pl/",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B057'58.6%22N+18%C2%B031'08.7%22E/@53.9662731,18.5182975,239m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.966272!4d18.519094?hl=pl"},


        { odleglosc: this.SiłowniaplenerowaILO,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62007810_2284191734968336_8629090039311106048_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=2a24503f574fed5ce1717ab467e94f7f&oe=5D8607D1",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62211140_350116682356166_4118848919327211520_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=b5a029a8aa7f9d06c412104790652a38&oe=5D8DE66D",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62052375_2272129522876861_4997394684566306816_n.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=a263e9e87e5f08adf655d2754da64d49&oe=5D925D26",

          Nazwa_Miejsca: "Siłownia plenerowa I LO",
          Adres: "Generała Józefa Hallera 31",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "15:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B058'15.3%22N+18%C2%B031'52.6%22E/@53.9709208,18.5307042,168m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.97092!4d18.531272?hl=pl"},

        { odleglosc: this.SiłowniaplenerowaILO2,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62307640_341924979840034_7115018603233017856_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=5ae41269b5c955b03d41362c5c245351&oe=5D90A377",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62366824_478349779373586_6164124178317312_n.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=620c38d3adef82c650ff334351dbc4d3&oe=5D7FEF3A",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62421957_366140140925681_6424818260708950016_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=333e4de64ba5c4eb52712884869be308&oe=5D9B2EA8",

          Nazwa_Miejsca: "Siłownia plenerowa I LO (2)",
          Adres: "Generała Józefa Hallera 31",
          Kategoria_Miejsca: "Siłownia plenerowa",
          Dyscyplina: "Sporty siłowe; Fitness",
          Nawierzchnia: "-",
          Godziny_Otwarcia: "15:00 - 22:00",
          Koszt: "Potrzeba rezerwacji",
          Strona_Internetowa: "-",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B058'16.5%22N+18%C2%B031'54.3%22E/@53.9712458,18.5311772,167m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x0!8m2!3d53.971245!4d18.531742?hl=pl"},

        { odleglosc: this.SalagimnastycznaPSP1filia,

          zdjecie: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62339791_2829946233743253_2002428261518278656_n.jpg?_nc_cat=102&_nc_ht=scontent-waw1-1.xx&oh=8d7bb29cad65c5c197e9bbe8b2d10e55&oe=5D51D741",
          zdjecie2: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62230531_2436987163046177_3735550636079448064_n.jpg?_nc_cat=110&_nc_ht=scontent-waw1-1.xx&oh=0fe3297c1bfe9c0971b2391c5916d284&oe=5D98787A",
          zdjecie3: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/62454870_418559702207369_3967025132538429440_n.jpg?_nc_cat=101&_nc_ht=scontent-waw1-1.xx&oh=6fec4434a29d2dc9b0c3b40ee1c9cc53&oe=5D851DD8",

          Nazwa_Miejsca: "Sala gimnastyczna PSP1 (filia)",
          Adres: "2 Pułku Szwoleżerów Rokitniańskich 4",
          Kategoria_Miejsca: "Sala gimnastyczna",
          Dyscyplina: "Koszykówka, siatkówka, gimnastyka",
          Nawierzchnia: "Parkiet drewniany",
          Godziny_Otwarcia: "16:00 - 22:00",
          Koszt: "Bezpłatne (Potrzeba rezerwacji)",
          Strona_Internetowa: "http://psp1starogardgd.edupage.org/news/?",
          Nawigacja: "https://www.google.pl/maps/place/53%C2%B057'58.7%22N+18%C2%B031'11.1%22E/@53.9663072,18.5186557,18z/data=!3m1!4b1!4m13!1m6!3m5!1s0x47029b5f8762496d:0xd1f2455896a7bd86!2sPubliczne+Gimnazjum+nr+3+im.+Stanis%C5%82awa+Staszica!8m2!3d53.9659753!4d18.5193786!3m5!1s0x0:0x0!7e2!8m2!3d53.9663018!4d18.5197563"},
          
          
        ];

    const sortedByOdleglosc = miejsca.sort((a, b) => {
      // 1st property, sort by count
      if (a.odleglosc > b.odleglosc)
          return -1;
      if (a.odleglosc < b.odleglosc)
          return 1;
      return 0;
    });

    const minMax= { min: 0, max: 0.25}

    const filterByNear = (miejsca: Miejsce[], range: { 
      min: number, max: number}) =>
      miejsca.filter(miejsce => miejsce.odleglosc >= range.min &&
        miejsce.odleglosc <= range.max);
    const filteredByNear = filterByNear(miejsca, minMax)
    // console.log(filteredByNear)

    


  if(this.LiveRefreshX == 1)
    console.log(filteredByNear.reverse())
    // this.results = sortedByOdleglosc
    this.results = filteredByNear

    
  }



  ObliczKilometry(x2DATA, y2DATA, WYNIK){

    this.lat2 = this.lat5
    this.lon2 = this.lon5

    //Twoja lokalizacja

    // this.x1 = 53.966637;
    // this.y1 = 18.516873;
    this.x1 = this.lat5;
    this.y1 = this.lon5;

    //Lokalizacja danego miejsca
    this.x2 = x2DATA;
    this.y2 = y2DATA;

    //zamiana na radiany
    this.radian = (this.x1* Math.PI)/180;
    
    //obliczanie kilometrów
    this.odległość = Math.sqrt((this.x2 - this.x1)*(this.x2 - this.x1)+(Math.cos(this.radian)*(this.y2-this.y1)*(Math.cos(this.radian)*(this.y2-this.y1))))*111,3214
    

    //ostateczny wynik w kilometrach
    this.kilometry = Math.round(this.odległość*100)/100;
    if(WYNIK == "BoiskoOSIR")
      this.BoiskoOSIR = this.kilometry

    if(WYNIK == "BoiskoDoKoszykówkiPrzyUlTrauguta")
      this.BoiskoDoKoszykówkiPrzyUlTrauguta = this.kilometry

    if(WYNIK == "BoiskoNaAleiJanaPawlaII2")
      this.BoiskoNaAleiJanaPawlaII2 = this.kilometry

    if(WYNIK == "BoiskoNaAleiJanaPawlaII")
      this.BoiskoNaAleiJanaPawlaII = this.kilometry

    if(WYNIK == "BoiskoNaOs60Lecia2")
      this.BoiskoNaOs60Lecia2 = this.kilometry

    if(WYNIK == "BoiskoNaOs60lecia")
    this.BoiskoNaOs60lecia = this.kilometry

    if(WYNIK == "OsKonstytucji3goMaja2")
    this.OsKonstytucji3goMaja2 = this.kilometry

    if(WYNIK == "BoiskoNaOsKonstytucji3goMaja")
    this.BoiskoNaOsKonstytucji3goMaja = this.kilometry

    if(WYNIK == "BoiskoNaOsMikołajaKopernika2")
    this.BoiskoNaOsMikołajaKopernika2 = this.kilometry

    if(WYNIK == "BoiskoNaOsMikołajaKopernika")
    this.BoiskoNaOsMikołajaKopernika = this.kilometry

    if(WYNIK == "BoiskoNaOsPiastów")
    this.BoiskoNaOsPiastów = this.kilometry

    if(WYNIK == "BoiskoNaOsSzumana2")
    this.BoiskoNaOsSzumana2 = this.kilometry

    if(WYNIK == "BoiskoNaOsSzumana")
    this.BoiskoNaOsSzumana = this.kilometry

    if(WYNIK == "BoiskoNaPiekiełkach")
    this.BoiskoNaPiekiełkach = this.kilometry

    if(WYNIK == "BoiskoNaPlacuZabaw")
    this.BoiskoNaPlacuZabaw = this.kilometry

    if(WYNIK == "BoiskoObokPolpharmy")
    this.BoiskoObokPolpharmy = this.kilometry

    if(WYNIK == "BoiskoORLIKŻabno")
    this.BoiskoORLIKŻabno = this.kilometry

    if(WYNIK == "BoiskoNaAleiJanaPawłaII3")
    this.BoiskoNaAleiJanaPawłaII3 = this.kilometry

    if(WYNIK == "BoiskoPrzyUlicyKsPiotraŚciegiennego")
    this.BoiskoPrzyUlicyKsPiotraŚciegiennego = this.kilometry

    if(WYNIK == "BoiskoNaUlicyPołudniowej")
    this.BoiskoNaUlicyPołudniowej = this.kilometry

    if(WYNIK == "BoiskoPSP4")
    this.BoiskoPSP4 = this.kilometry

    if(WYNIK == "BoiskoPSP1")
    this.BoiskoPSP1 = this.kilometry

    if(WYNIK == "BoiskoPSP32")
    this.BoiskoPSP32 = this.kilometry

    if(WYNIK == "BoiskoPSP3")
    this.BoiskoPSP3 = this.kilometry

    if(WYNIK == "BoiskoPSP3DawnePG2")
    this.BoiskoPSP3DawnePG2 = this.kilometry

    if(WYNIK == "BoiskoPSP4AlejaJanaPawlaII")
    this.BoiskoPSP4AlejaJanaPawlaII = this.kilometry

    if(WYNIK == "BoiskoPSP6")
    this.BoiskoPSP6 = this.kilometry

    if(WYNIK == "BoiskoPSP8")
    this.BoiskoPSP8 = this.kilometry

    if(WYNIK == "BoiskoWParkuRekreacyjnymAKUKU")
    this.BoiskoWParkuRekreacyjnymAKUKU = this.kilometry

    if(WYNIK == "BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku")
    this.BoiskoWRodzinnymParkuEdukacjiSportowejIWypoczynku = this.kilometry

    if(WYNIK == "BoiskoZSZ")
    this.BoiskoZSZ = this.kilometry

    if(WYNIK == "HalaSportowaImGerardaPodolskiegoAGRO")
    this.HalaSportowaImGerardaPodolskiegoAGRO = this.kilometry

    if(WYNIK == "MiejskaHalaSportowaImAndrzejaGrubbyOSiR")
    this.MiejskaHalaSportowaImAndrzejaGrubbyOSiR = this.kilometry

    if(WYNIK == "SalaGimnastycznaILiceumOgólnokształcące")
    this.SalaGimnastycznaILiceumOgólnokształcące = this.kilometry

    if(WYNIK == "SalaGimnastycznaIILiceumOgólnokształcące")
    this.SalaGimnastycznaIILiceumOgólnokształcące = this.kilometry

    if(WYNIK == "SalaGimnastycznaMOS")
    this.SalaGimnastycznaMOS = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP1")
    this.SalaGimnastycznaPSP1 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP32")
    this.SalaGimnastycznaPSP32 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP3")
    this.SalaGimnastycznaPSP3 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP4")
    this.SalaGimnastycznaPSP4 = this.kilometry

    if(WYNIK == "SalaGimnastycznaPSP8")
    this.SalaGimnastycznaPSP8 = this.kilometry

    if(WYNIK == "SalaGimnastycznaZSE")
    this.SalaGimnastycznaZSE = this.kilometry

    if(WYNIK == "PlaczabawFikumiku")
    this.PlaczabawFikumiku = this.kilometry

    if(WYNIK == "BieżnaokólnaPSP8")
      this.BieżnaokólnaPSP8 = this.kilometry
    if(WYNIK == "BieżniaokólnaPSP1")
      this.BieżniaokólnaPSP1 = this.kilometry
    if(WYNIK == "BieżniaPSP3")
      this.BieżniaPSP3 = this.kilometry
    if(WYNIK == "BieżniaPSP4")
      this.BieżniaPSP4 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR")
      this.StadionMiejskiimKazimierzaDeynyOSiR = this.kilometry
    
    if(WYNIK == "BasenPSP1")
      this.BasenPSP1 = this.kilometry
    if(WYNIK == "BasenREN")
      this.BasenREN = this.kilometry
    if(WYNIK == "CentrumRehabilitacyjnoLeczniczeMEDPHARMA")
      this.CentrumRehabilitacyjnoLeczniczeMEDPHARMA = this.kilometry
    if(WYNIK == "FitnessYankess")
      this.FitnessYankess = this.kilometry
    if(WYNIK == "FLOWPARKStreetworkoutPark")
      this.FLOWPARKStreetworkoutPark = this.kilometry
    if(WYNIK == "NeptunGym")
      this.NeptunGym = this.kilometry
    if(WYNIK == "PumaKlubFitness")
      this.PumaKlubFitness = this.kilometry

// *-----------------------------------*//


    if(WYNIK == "SiłowniaplenerowaOSiR")
      this.SiłowniaplenerowaOSiR = this.kilometry
    if(WYNIK == "SiłowniaplenerowanaOsKonstytucji3goMaja")
      this.SiłowniaplenerowanaOsKonstytucji3goMaja = this.kilometry
    if(WYNIK == "SiłowniaplenerowanaOsMikołajaKopernika2")
      this.SiłowniaplenerowanaOsMikołajaKopernika2 = this.kilometry
    if(WYNIK == "SiłowniaplenerowanaOsMikołajaKopernika")
      this.SiłowniaplenerowanaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "Leszczynowa2")
      this.Leszczynowa2 = this.kilometry
    if(WYNIK == "SiłowniaplenerowaobokPolpharmy")
      this.SiłowniaplenerowaobokPolpharmy = this.kilometry
    if(WYNIK == "SiłowniaplenerowaParkNoweOblicze")
      this.SiłowniaplenerowaParkNoweOblicze = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyOsJurandazeSpychowa")
      this.SiłowniaplenerowaprzyOsJurandazeSpychowa = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyulTraugutta")
      this.SiłowniaplenerowaprzyulTraugutta = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyulicySzturmowskiego")
      this.SiłowniaplenerowaprzyulicySzturmowskiego = this.kilometry
    if(WYNIK == "SiłowniaplenerowawParkuRekreacyjnymAKUKU")
      this.SiłowniaplenerowawParkuRekreacyjnymAKUKU = this.kilometry
    if(WYNIK == "StreetWorkoutParkprzyOsJurandazeSpychowa")
      this.StreetWorkoutParkprzyOsJurandazeSpychowa = this.kilometry
    if(WYNIK == "KlubFalangaStarogard")
      this.KlubFalangaStarogard = this.kilometry
    if(WYNIK == "SiłowniaplenerowaprzyplacuzabawFikumiku")
      this.SiłowniaplenerowaprzyplacuzabawFikumiku = this.kilometry
    if(WYNIK == "SalagimnastycznaPSP33")
      this.SalagimnastycznaPSP33 = this.kilometry
    if(WYNIK == "SalagimnastycznaPSP32")
      this.SalagimnastycznaPSP32 = this.kilometry
    if(WYNIK == "KręgielniaKULA")
      this.KręgielniaKULA = this.kilometry
    if(WYNIK == "CastleBowlingClub")
      this.CastleBowlingClub = this.kilometry
    if(WYNIK == "KręgielniaREN")
      this.KręgielniaREN = this.kilometry
    if(WYNIK == "SkoczniaPSP1")
      this.SkoczniaPSP1 = this.kilometry
    if(WYNIK == "SkoczniaPSP4")
      this.SkoczniaPSP4 = this.kilometry
    if(WYNIK == "SkoczniaPSP8")
      this.SkoczniaPSP8 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR3")
      this.StadionMiejskiimKazimierzaDeynyOSiR3 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR2")
      this.StadionMiejskiimKazimierzaDeynyOSiR2 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR4")
      this.StadionMiejskiimKazimierzaDeynyOSiR4 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR5")
      this.StadionMiejskiimKazimierzaDeynyOSiR5 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR6")
      this.StadionMiejskiimKazimierzaDeynyOSiR6 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR7")
      this.StadionMiejskiimKazimierzaDeynyOSiR7 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR8")
      this.StadionMiejskiimKazimierzaDeynyOSiR8 = this.kilometry
    if(WYNIK == "StadionMiejskiimKazimierzaDeynyOSiR9")
      this.StadionMiejskiimKazimierzaDeynyOSiR9 = this.kilometry
    if(WYNIK == "LodowiskoOSiR")
      this.LodowiskoOSiR = this.kilometry
    if(WYNIK == "BoiskoDoPilkiNoznejNaOs60Lecia")
      this.BoiskoDoPilkiNoznejNaOs60Lecia = this.kilometry
    if(WYNIK == "BoiskoNaOsKonstytucji3GoMaja")
      this.BoiskoNaOsKonstytucji3GoMaja = this.kilometry
    if(WYNIK == "BoiskoNaOsMikolajaKopernika")
      this.BoiskoNaOsMikolajaKopernika = this.kilometry
    if(WYNIK == "BoiskoNaOsMikolajaKopernika2")
      this.BoiskoNaOsMikolajaKopernika2 = this.kilometry
    if(WYNIK == "BoiskoNaPlacuZabawJacekIAgatka")
      this.BoiskoNaPlacuZabawJacekIAgatka = this.kilometry
    if(WYNIK == "BoiskoNaPrzylesiu")
      this.BoiskoNaPrzylesiu = this.kilometry
    if(WYNIK == "BoiskoPrzyOsJurandaZeSpychowa")
      this.BoiskoPrzyOsJurandaZeSpychowa = this.kilometry
    if(WYNIK == "BoiskoPSP12")
      this.BoiskoPSP12 = this.kilometry
    if(WYNIK == "StadionMiejskiImKazimierzaDeynyOSiR")
      this.StadionMiejskiImKazimierzaDeynyOSiR = this.kilometry
    if(WYNIK == "StadionWłókniarzImKazimierzaKropidłowskiego")
      this.StadionWłókniarzImKazimierzaKropidłowskiego = this.kilometry
    if(WYNIK == "BoiskoDoPiłkiNożnejPrzyUlZielonej")
      this.BoiskoDoPiłkiNożnejPrzyUlZielonej = this.kilometry
    if(WYNIK == "AdresBoiskoNaOsMikołajaKopernika")
      this.AdresBoiskoNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "BoiskoPSP4AlejaJanaPawłaII")
      this.BoiskoPSP4AlejaJanaPawłaII = this.kilometry
    if(WYNIK == "BoiskoNaOs60Lecia")
      this.BoiskoNaOs60Lecia = this.kilometry
    if(WYNIK == "BoiskoPSP3CzynneSezonowo")
      this.BoiskoPSP3CzynneSezonowo = this.kilometry
    if(WYNIK == "BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta")
      this.BoiskoDoSiatkówkiPlażowejPrzyUlTraugutta = this.kilometry
    if(WYNIK == "RolkowiskowParkuRekreacyjnymAKUKU")
      this.RolkowiskowParkuRekreacyjnymAKUKU = this.kilometry
    if(WYNIK == "SkateparkOSiR")
      this.SkateparkOSiR = this.kilometry
    if(WYNIK == "SkateparkParkNoweOblicze")
      this.SkateparkParkNoweOblicze = this.kilometry
    if(WYNIK == "DrążkidoStreetworkoutprzyulicySzturmowskiego")
      this.DrążkidoStreetworkoutprzyulicySzturmowskiego = this.kilometry
    if(WYNIK == "FLOWPARKSiłowniaplenerowa")
      this.FLOWPARKSiłowniaplenerowa = this.kilometry
    if(WYNIK == "HalasportowaimGerardaPodolskiegoAGRO")
      this.HalasportowaimGerardaPodolskiegoAGRO = this.kilometry
    if(WYNIK == "SalagimnastycznaMOS")
      this.SalagimnastycznaMOS = this.kilometry
    if(WYNIK == "StółdogrywszachyNaOsMikołajaKopernika")
      this.StółdogrywszachyNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "StółdogrywszachynaOsPiastów")
      this.StółdogrywszachynaOsPiastów = this.kilometry
    if(WYNIK == "FLOWPARKStółszachowy")
      this.FLOWPARKStółszachowy = this.kilometry
    if(WYNIK == "EndorfinaPoleFitness")
      this.EndorfinaPoleFitness = this.kilometry
    if(WYNIK == "EstaFiesta")
      this.EstaFiesta = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaAleiJanaPawłaII")
      this.StółDoGryWPingPongaNaAleiJanaPawłaII = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaOs60lecia")
      this.StółDoGryWPingPongaNaOs60lecia = this.kilometry
    if(WYNIK == "StółDoPingPongaNaOs60lecia2")
      this.StółDoPingPongaNaOs60lecia2 = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaOsKonstytucji3goMaja")
      this.StółDoGryWPingPongaNaOsKonstytucji3goMaja = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku")
      this.StółDoGryWPingPongaPrzyRodzinnymParkuEdukacjiSportowejIWypoczynku = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaNaOsMikołajaKopernika")
      this.StółDoGryWPingPongaNaOsMikołajaKopernika = this.kilometry
    if(WYNIK == "StółDoPingPongaNaOsKonstytucji3goMaja2")
      this.StółDoPingPongaNaOsKonstytucji3goMaja2 = this.kilometry
    if(WYNIK == "StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego")
      this.StółDoGryWPingPongaPrzyUlicyKsPiotraŚciegiennego = this.kilometry
    if(WYNIK == "StółdogrywpingpongaWParkuRekreacyjnymAKUKU")
      this.StółdogrywpingpongaWParkuRekreacyjnymAKUKU = this.kilometry
    if(WYNIK == "StółdogrywpingpongaprzyulTraugutta")
      this.StółdogrywpingpongaprzyulTraugutta = this.kilometry
    if(WYNIK == "KortOSiR")
      this.KortOSiR = this.kilometry
    if(WYNIK == "KortTenisowyNaUlZblewskiej")
      this.KortTenisowyNaUlZblewskiej = this.kilometry
    if(WYNIK == "ŚciankawspinaczkowaOSiR")
      this.ŚciankawspinaczkowaOSiR = this.kilometry
    if(WYNIK == "BoiskoILO")
      this.BoiskoILO = this.kilometry
    if(WYNIK == "BoiskoPSP1filia")
      this.BoiskoPSP1filia = this.kilometry
    if(WYNIK == "BoiskoPSP1filiaSiatkówka")
      this.BoiskoPSP1filiaSiatkówka = this.kilometry
    if(WYNIK == "SiłowniaplenerowaILO")
      this.SiłowniaplenerowaILO = this.kilometry
    if(WYNIK == "SiłowniaplenerowaILO2")
      this.SiłowniaplenerowaILO2 = this.kilometry  
    if(WYNIK == "SalagimnastycznaPSP1filia")
      this.SalagimnastycznaPSP1filia = this.kilometry

  }

  PUSHOPIS(){
    this.navCtrl.push(OpisPage, {Nazwa_Miejsca: this.NazwaMiejsca, Dyscyplina: this.Dyscyplina,
      Kategoria_Miejsca: this.KategoriaMiejsca, Adres_Adres: this.Adres,
      Nawierzchnia: this.Nawierzchnia,
      Godziny_Otwarcia: this.GodzinyOtwarcia, Koszt_Koszt: this.Koszt, Strona_Internetowa: this.StronaInternetowa,
      zdjecie: this.ZDJECIE, zdjecie2: this.ZDJECIE2, zdjecie3: this.ZDJECIE3, Nawigacja: this.nawigacja});
    }

  OPIS(NM, D, KM, A, N, GO, K, SI, Z, Z2, Z3, NAW){
    this.NazwaMiejsca = NM
    this.Dyscyplina = D
    this.KategoriaMiejsca = KM
    this.Adres = A
    this.Nawierzchnia = N
    this.GodzinyOtwarcia = GO
    this.Koszt = K
    this.StronaInternetowa = SI
    this.ZDJECIE = Z
    this.ZDJECIE2 = Z2
    this.ZDJECIE3 = Z3
    this.nawigacja = NAW
    this.PUSHOPIS()
  }

  OpenUrl(url){
  const browser = this.iab.create(url);
  browser.show()
  }

}
