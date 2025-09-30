import type { Schema, Struct } from '@strapi/strapi';

export interface CtAsBotonAccion extends Struct.ComponentSchema {
  collectionName: 'components_ct_as_boton_accions';
  info: {
    displayName: 'boton_accion';
    icon: 'cursor';
  };
  attributes: {
    texto: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface EspecificacionesCapacidad extends Struct.ComponentSchema {
  collectionName: 'components_especificaciones_capacidads';
  info: {
    description: '';
    displayName: 'capacidad';
    icon: 'stack';
  };
  attributes: {
    capacidadPrecio: Schema.Attribute.Component<
      'especificaciones.capacidad-precio',
      true
    >;
  };
}

export interface EspecificacionesCapacidadPrecio
  extends Struct.ComponentSchema {
  collectionName: 'components_especificaciones_capacidad_precios';
  info: {
    displayName: 'capacidadPrecio';
    icon: 'cog';
  };
  attributes: {
    capacidad: Schema.Attribute.String;
    precio: Schema.Attribute.Decimal;
  };
}

export interface EspecificacionesColor extends Struct.ComponentSchema {
  collectionName: 'components_especificaciones_colors';
  info: {
    description: '';
    displayName: 'color';
    icon: 'brush';
  };
  attributes: {
    capacidad: Schema.Attribute.String;
    codigo_de_barras: Schema.Attribute.String;
    color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    SKU: Schema.Attribute.String;
    stock: Schema.Attribute.Integer;
  };
}

export interface EspecificacionesColoresDelDispositivo
  extends Struct.ComponentSchema {
  collectionName: 'components_especificaciones_colores_del_dispositivos';
  info: {
    description: '';
    displayName: 'colores-del-dispositivo';
    icon: 'brush';
  };
  attributes: {
    color: Schema.Attribute.Component<'especificaciones.color', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface ZonaDinamicaHero extends Struct.ComponentSchema {
  collectionName: 'components_zona_dinamica_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'apps';
  };
  attributes: {
    portadas: Schema.Attribute.Component<'zona-dinamica.portadas', true>;
  };
}

export interface ZonaDinamicaNovedades extends Struct.ComponentSchema {
  collectionName: 'components_zona_dinamica_novedades';
  info: {
    description: '';
    displayName: 'novedades';
    icon: 'cursor';
  };
  attributes: {
    boton_accion: Schema.Attribute.Component<'ct-as.boton-accion', false>;
    cabecera: Schema.Attribute.String;
    imagen_claro: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imagen_oscuro: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    texto: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface ZonaDinamicaPortadas extends Struct.ComponentSchema {
  collectionName: 'components_zona_dinamica_portadas';
  info: {
    displayName: 'portadas';
    icon: 'apps';
  };
  attributes: {
    boton_accion: Schema.Attribute.Component<'ct-as.boton-accion', true>;
    imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ct-as.boton-accion': CtAsBotonAccion;
      'especificaciones.capacidad': EspecificacionesCapacidad;
      'especificaciones.capacidad-precio': EspecificacionesCapacidadPrecio;
      'especificaciones.color': EspecificacionesColor;
      'especificaciones.colores-del-dispositivo': EspecificacionesColoresDelDispositivo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'zona-dinamica.hero': ZonaDinamicaHero;
      'zona-dinamica.novedades': ZonaDinamicaNovedades;
      'zona-dinamica.portadas': ZonaDinamicaPortadas;
    }
  }
}
