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