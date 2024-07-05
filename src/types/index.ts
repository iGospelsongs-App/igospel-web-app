export interface SubMenuItem {
  title: string;
  src: string;
  cName?: string;
}

export interface MenuItem {
  title: string;
  src: string;
  icon: string;
  gap?: boolean;
  iconP: string;
  subMenus?: SubMenuItem[];
}

export interface HomeMenuType {
  title: string;
  img: string;
}

export interface TableContentType {
  name: string;
  date: string;
  number: string;
  quantity: number;
}

export interface SliderDisplayDataType {
  title: string;
  type: string;
  artist: string;
  image: string;
}

export interface SermaonlistDataType {
  title: string;
  type: string;
  artist: string;
  image: string;
}

export interface AlbumlistDataType {
  title: string;
  artist: string;
  duration: string;
}

export interface ExploreData {
  img: string;
}
export interface ExploreData2 {
  img: string;
}

export interface Ministration {
  img: string;
  title: string;

}



