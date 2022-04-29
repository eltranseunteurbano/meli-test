import { assert, expect, test } from 'vitest';
import { ProductItem } from '../src/types/ProductItem';
import getCleanProduct from '../src/utils/getCleanProduct';

const mockQueryProduct = {
  id: 'MLA930955590',
  site_id: 'MLA',
  title: 'Bordeadora Wimer W500 220v Con Accesorios',
  subtitle: null,
  seller_id: 44777951,
  category_id: 'MLA373521',
  official_store_id: null,
  price: 7386.84,
  base_price: 7386.84,
  original_price: 8273.26,
  currency_id: 'ARS',
  initial_quantity: 2598,
  available_quantity: 500,
  sold_quantity: 500,
  sale_terms: [
    {
      id: 'WARRANTY_TYPE',
      name: 'Tipo de garantía',
      value_id: '2230279',
      value_name: 'Garantía de fábrica',
      value_struct: null,
      values: [
        {
          id: '2230279',
          name: 'Garantía de fábrica',
          struct: null,
        },
      ],
    },
    {
      id: 'WARRANTY_TIME',
      name: 'Tiempo de garantía',
      value_id: null,
      value_name: '24 meses',
      value_struct: {
        number: 24,
        unit: 'meses',
      },
      values: [ {
        id: null,
        name: '24 meses',
        struct: {
          number: 24,
          unit: 'meses',
        },
      } ],
    },
  ],
  buying_mode: 'buy_it_now',
  listing_type_id: 'gold_special',
  start_time: '2021-07-26T18:46:11.000Z',
  stop_time: '2041-07-21T04:00:00.000Z',
  condition: 'new',
  permalink: 'https://articulo.mercadolibre.com.ar/MLA-930955590-bordeadora-wimer-w500-220v-con-accesorios-_JM',
  thumbnail_id: '916832-MLA46193941724_052021',
  thumbnail: 'http://http2.mlstatic.com/D_916832-MLA46193941724_052021-I.jpg',
  secure_thumbnail: 'https://http2.mlstatic.com/D_916832-MLA46193941724_052021-I.jpg',
  pictures: [ { id: '916832-MLA46193941724_052021', url: 'http://http2.mlstatic.com/D_916832-MLA46193941724_052021-O.jpg', secure_url: 'https://http2.mlstatic.com/D_916832-MLA46193941724_052021-O.jpg', size: '242x500', max_size: '551x1138', quality: '' }, { id: '672286-MLA46193925649_052021', url: 'http://http2.mlstatic.com/D_672286-MLA46193925649_052021-O.jpg', secure_url: 'https://http2.mlstatic.com/D_672286-MLA46193925649_052021-O.jpg', size: '500x484', max_size: '862x836', quality: '' } ],
  video_id: null,
  descriptions: [],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: [],
  shipping: { mode: 'me2', free_methods: [ { id: 73328, rule: { default: true, free_mode: 'country', free_shipping_flag: true, value: null } } ], tags: [ 'self_service_in', 'mandatory_free_shipping' ], dimensions: null, local_pick_up: false, free_shipping: true, logistic_type: 'cross_docking', store_pick_up: true },
  international_delivery_mode: 'none',
  seller_address: { city: { name: 'Caba' }, state: { id: 'AR-C', name: 'Capital Federal' }, country: { id: 'AR', name: 'Argentina' }, search_location: { neighborhood: { id: 'TUxBQlZJTDcwOTla', name: 'Villa Urquiza' }, city: { id: 'TUxBQ0NBUGZlZG1sYQ', name: 'Capital Federal' }, state: { id: 'TUxBUENBUGw3M2E1', name: 'Capital Federal' } }, id: 329706960 },
  seller_contact: null,
  location: {},
  coverage_areas: [],
  attributes: [ { id: 'ACCESSORIES_INCLUDED', name: 'Accesorios incluidos', value_id: '8792110', value_name: 'Carro 4 ruedas', value_struct: null, values: [ { id: '8792110', name: 'Carro 4 ruedas', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'BEARING_NUMBER', name: 'Cantidad de rulemanes', value_id: '8785943', value_name: '1', value_struct: null, values: [ { id: '8785943', name: '1', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'BRAND', name: 'Marca', value_id: '2471089', value_name: 'Wimer', value_struct: null, values: [ { id: '2471089', name: 'Wimer', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'CUTTING_SYSTEMS', name: 'Sistemas de corte', value_id: '2489145', value_name: 'Tanza', value_struct: null, values: [ { id: '2489145', name: 'Tanza', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'GTIN', name: 'Código universal de producto', value_id: null, value_name: '7798157280903', value_struct: null, values: [ { id: null, name: '7798157280903', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'ITEM_CONDITION', name: 'Condición del ítem', value_id: '2230284', value_name: 'Nuevo', value_struct: null, values: [ { id: '2230284', name: 'Nuevo', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'LINE_FEED_SYSTEMS', name: 'Sistemas de alimentación de la tanza', value_id: '8735209', value_name: 'Manual', value_struct: null, values: [ { id: '8735209', name: 'Manual', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'LINE_OUTPUT', name: 'Salidas de tanza', value_id: '8744185', value_name: '2', value_struct: null, values: [ { id: '8744185', name: '2', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'MACHINE_TYPE', name: 'Tipo de máquina', value_id: '8666634', value_name: 'Bordeadora', value_struct: null, values: [ { id: '8666634', name: 'Bordeadora', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'MAX_DIAMETER_LINE', name: 'Diámetro máximo de la tanza', value_id: '9388601', value_name: '320 cm', value_struct: { number: 320, unit: 'cm' }, values: [ { id: '9388601', name: '320 cm', struct: { number: 320, unit: 'cm' } } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'MODEL', name: 'Modelo', value_id: '26041', value_name: 'W500', value_struct: null, values: [ { id: '26041', name: 'W500', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'POWER', name: 'Potencia', value_id: '96692', value_name: '500 W', value_struct: { number: 500, unit: 'W' }, values: [ { id: '96692', name: '500 W', struct: { number: 500, unit: 'W' } } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'POWER_SUPPLY_TYPE', name: 'Tipo de alimentación', value_id: '8152567', value_name: 'Corriente eléctrica', value_struct: null, values: [ { id: '8152567', name: 'Corriente eléctrica', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'SELLER_SKU', name: 'SKU', value_id: null, value_name: '502w BOR', value_struct: null, values: [ { id: null, name: '502w BOR', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'VOLTAGE', name: 'Voltaje', value_id: '198813', value_name: '220V', value_struct: null, values: [ { id: '198813', name: '220V', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'WITH_HANDLEBAR_ADJUSTMENT', name: 'Con regulación de manillar', value_id: '242085', value_name: 'Sí', value_struct: null, values: [ { id: '242085', name: 'Sí', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' }, { id: 'WITH_HOUSING_PROTECTION', name: 'Con carcasa de protección', value_id: '242085', value_name: 'Sí', value_struct: null, values: [ { id: '242085', name: 'Sí', struct: null } ], attribute_group_id: 'OTHERS', attribute_group_name: 'Otros' } ],
  warnings: [],
  listing_source: '',
  variations: [],
  status: 'active',
  sub_status: [],
  tags: [ 'extended_warranty_eligible', 'good_quality_picture', 'good_quality_thumbnail', 'loyalty_discount_eligible', 'immediate_payment', 'cart_eligible' ],
  warranty: 'Garantía de fábrica: 24 meses',
  catalog_product_id: 'MLA15916937',
  domain_id: 'MLA-ELECTRIC_BRUSH_CUTTERS_AND_STRING_TRIMMERS',
  parent_item_id: null,
  differential_pricing: null,
  deal_ids: [ 'MLA7156', 'MLA10315' ],
  automatic_relist: false,
  date_created: '2021-07-26T18:46:12.000Z',
  last_updated: '2022-04-28T19:33:42.000Z',
  health: null,
  catalog_listing: true,
  channels: [ 'marketplace', 'mshops' ] };

const mockProduct: ProductItem = {
  author: {
    name: 'Jaime',
    lastname: 'Burbano',
  },
  item: {
    id: 'MLA930955590',
    title: 'Bordeadora Wimer W500 220v Con Accesorios',
    price: {
      currency: 'ARS',
      amount: 7386.84,
      decimals: 0,
    },
    picture: {
      url: 'http://http2.mlstatic.com/D_916832-MLA46193941724_052021-O.jpg',
      width: 242,
      height: 500,
    },
    condition: 'new',
    free_shipping: true,
    sold_quantity: 500,
  },
};

test('getCleanProduct', () => {
  expect(Object.entries(getCleanProduct({})).length).toEqual(2);
  expect(Object.entries(getCleanProduct({ foo: 'bar' })).length).toEqual(2);

  assert.deepEqual(getCleanProduct(mockQueryProduct, false), mockProduct);
  assert.deepEqual(getCleanProduct(mockQueryProduct, true), {
    ...mockProduct,
    item: {
      ...mockProduct.item,
      picture: {
        ...mockProduct.item.picture,
        width: 180,
        height: 180,
        url: 'http://http2.mlstatic.com/D_916832-MLA46193941724_052021-I.jpg',
      },
    },
  });
});
