import instance from '~/api/instance';
import mockAdapter from 'axios-mock-adapter';
import { Store as NewsListStore } from '~/scenes/News/List';
import PendingEnum from '~/mobx/enums/PendingEnum';

describe('NewsListStore tests', () => {
    let store: NewsListStore;

    const response = [
        {
            "id": 1,
            "title": "Силовики пришли с обысками в дом правительства Карачаево-Черкесии",
            "description": "Силовики из Москвы проводят обыски в доме правительства Карачаево-Черкесии. «Обыски в правительстве идут, этим занимается ФСБ, работают там сотрудники из Москвы», — сообщил источник в правоохранительных органах. Власти северокавказской республики отвергли эту информацию.",
            "image": "https://icdn.lenta.ru/images/2018/06/27/17/20180627171459281/pic_e52d60a9bea7673f165fe3c8d7a14ef2.jpg",
            "content": "<p>Donec dolor mi, tincidunt ut dui quis, rutrum vulputate arcu. Morbi eu ligula nibh. Ut tempus augue ipsum. Phasellus vestibulum lobortis nulla, sed sodales justo. Nulla mi augue, mollis non felis id, luctus sollicitudin lorem. Sed elementum arcu eget leo ullamcorper aliquet bibendum nec neque. Vivamus imperdiet, leo sit amet consequat pulvinar, tellus tellus imperdiet nulla, fermentum hendrerit lacus mi vitae dolor.</p><p>Suspendisse viverra at mi sed eleifend. Integer gravida erat eu lorem tempus lobortis. Cras vitae laoreet orci. Praesent maximus efficitur odio, vel hendrerit lorem maximus at. Sed ut elit ac orci porttitor vehicula congue a tortor. Nulla rhoncus, nunc convallis feugiat fermentum, libero ipsum cursus turpis, non sodales diam quam tempus metus. Phasellus eu enim augue. Nullam laoreet elit sit amet hendrerit pharetra. Aliquam molestie, arcu sed mollis egestas, lacus lacus consectetur est, commodo scelerisque neque justo id erat. Duis malesuada augue ligula, et porttitor leo aliquam sit amet. Sed tortor mauris, lacinia vitae feugiat sit amet, sagittis at nibh. Suspendisse rutrum massa eu turpis vestibulum tristique. Phasellus non posuere metus. Pellentesque sodales ante nisl, ultrices ullamcorper libero tristique at.</p><p>In ac fringilla tortor. Vivamus vel sem ornare, consequat orci vitae, semper urna. Nulla eget dapibus sapien, a rutrum felis. Mauris sit amet ipsum in lacus porta convallis. Etiam sollicitudin sagittis metus, ut vestibulum dolor bibendum in. Etiam fermentum suscipit lectus iaculis vestibulum. Aliquam luctus dolor est, ut faucibus mi sodales et. Proin sed lorem vestibulum est tristique venenatis. Nulla sed convallis justo. Suspendisse neque sem, viverra in semper quis, ultrices eu mauris. Etiam sed nunc leo. Pellentesque pulvinar ultrices felis vel convallis. Sed in cursus justo, sed mollis est. Proin tempus dignissim est, nec efficitur massa ornare auctor.</p>",
            "categoryId": 1,
            "category": {
                "id": 1,
                "category": "Популярные"
            }
        },
        {
            "id": 2,
            "title": "Кремль анонсировал встречу Путина и Трампа",
            "description": "Москва и Вашингтон достигли договоренности о времени и месте саммита Россия — США, в рамках которого планируется провести встречу с участием президентов двух стран. Более подробная информация о предстоящих переговорах между Владимиром Путиным и Дональдом Трампом будет обнародована 28 июня.",
            "image": "https://icdn.lenta.ru/images/2018/06/27/17/20180627172341218/pic_afda08067332c374ff7a1edf79cf28c5.jpg",
            "content": "<p>Etiam vel auctor mi. Donec fermentum nisl a accumsan lobortis. In hendrerit feugiat libero, ut tincidunt lectus posuere at. Nam malesuada, felis eu elementum cursus, tortor velit ultricies justo, id tristique mauris enim eu odio. Vestibulum et fermentum mi. Aenean pretium orci eget magna convallis sollicitudin. Nullam quis molestie nulla. Ut sed massa sed sapien tristique aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus porta orci sed neque sagittis lobortis. Nulla neque ex, pulvinar non fringilla ac, pharetra condimentum sem. Morbi nec congue nulla, sit amet faucibus tellus.</p><p>Nunc at molestie lectus. Nullam vel aliquam nisi. Curabitur sed auctor justo. Nam ac sodales lacus, ut porta odio. Morbi at accumsan diam, non pretium lacus. Vivamus elementum urna sit amet rutrum iaculis. Etiam eget laoreet libero.</p><p>Ut posuere sagittis magna, sed vehicula neque scelerisque sed. In ac tempor orci. Etiam sit amet fermentum nibh. Phasellus enim magna, auctor placerat dignissim quis, cursus varius tortor. Nulla ut turpis et justo ullamcorper pharetra vel in ex. Quisque eleifend finibus diam vitae scelerisque. Nunc interdum quam felis, et molestie lectus varius vitae. Morbi justo quam, porta sit amet lectus ac, congue auctor velit. Ut vehicula, eros ac lobortis commodo, sem enim efficitur mauris, quis hendrerit urna risus eu augue. Nam sed quam at orci fermentum sollicitudin in quis leo. Donec placerat lectus turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus dictum facilisis justo placerat pharetra. Nam massa odio, ultricies lobortis enim vitae, consequat interdum nisl. Morbi volutpat nibh non erat dignissim sagittis.</p>",
            "categoryId": 1,
            "category": {
                "id": 1,
                "category": "Популярные"
            }
        },
        {
            "id": 3,
            "title": "США придумали способ лишить Индию российских С-400",
            "description": "США могут попробовать убедить Индию закупить американские системы противоракетной обороны THAAD, чтобы заблокировать сделку по поставке Нью-Дели российских зенитных ракетных систем С-400. Предложение может быть озвучено на встрече глав МИД и Минобороны Индии с госсекретарем США и главой Пентагона в Вашингтоне 6 июля.",
            "image": "https://icdn.lenta.ru/images/2018/06/27/14/20180627141956126/pic_55d63e159544508d299473167682f15f.jpg",
            "content": "<p>Pellentesque ante neque, imperdiet sed ultricies non, pretium ac nisi. Vivamus ut gravida sapien. Suspendisse sollicitudin dignissim nulla, at porttitor diam ultricies ut. Pellentesque gravida elit neque, ac tempor erat venenatis quis. Nunc magna ligula, suscipit in viverra a, bibendum quis odio. Morbi eu finibus mi. Donec posuere lorem eu faucibus ornare. Aliquam vel magna metus. Sed odio leo, dignissim id velit sed, posuere viverra velit. Sed venenatis viverra ipsum non venenatis. Nam in bibendum arcu. Phasellus placerat ante non rutrum aliquam. Nullam massa dui, congue a ultrices eget, vestibulum et purus. Ut in tempus lectus. Aenean quis eros rhoncus, luctus nibh a, posuere quam. Aliquam vestibulum, mauris in mattis gravida, tortor diam gravida tellus, ac sagittis nunc nisi at sem.</p><p>Donec varius magna nec mauris semper condimentum. Morbi vel metus ultrices, semper dolor at, iaculis sapien. Fusce eros leo, laoreet vitae lacus lacinia, suscipit pretium tortor. Pellentesque interdum mattis volutpat. Cras vitae congue augue. Curabitur a imperdiet massa. Pellentesque aliquet commodo congue. Integer vel nisi facilisis, elementum metus ac, elementum tortor. Praesent cursus pellentesque vestibulum. Etiam sit amet fermentum mi, sit amet facilisis orci. In lacinia lobortis elit, eu consequat dui efficitur a. In rhoncus cursus urna tempus pellentesque. Sed congue convallis nibh, id varius lacus venenatis in. Ut semper luctus ante, et facilisis nisl blandit sed.</p>",
            "categoryId": 1,
            "category": {
                "id": 1,
                "category": "Популярные"
            }
        },
        {
            "id": 4,
            "title": "Раскрыты подробности биографии ставшего полпредом Путина таинственного генерала",
            "description": "Генерал-майор Александр Матовников, назначенный полномочным представителем президента в Северо-Кавказском федеральном округе, очень близок к главе государства Владимиру Путину. По данным источников, военный регулярно встречал президента в аэропорту Внуково и пользовался его личным доверием.",
            "image": "https://icdn.lenta.ru/images/2018/06/27/13/20180627131010235/pic_d0eeec4c3d1fca6b0e41d9cf8cb55cb9.jpg",
            "content": "<p>Morbi egestas posuere vestibulum. Aenean in erat congue dolor tristique aliquam ac tristique augue. Mauris sagittis nisl a sollicitudin rhoncus. Pellentesque eleifend facilisis sapien. In hac habitasse platea dictumst. Etiam pretium efficitur mi. Sed viverra vel nunc sodales elementum. Nullam consequat tempor scelerisque. Donec feugiat, est vel ultrices ultricies, dolor risus lacinia massa, vel fringilla neque risus in ligula. Cras pellentesque tempor mauris eu mollis.</p>",
            "categoryId": 1,
            "category": {
                "id": 1,
                "category": "Популярные"
            }
        },
        {
            "id": 5,
            "title": "Дания нашла способ заблокировать «Северный поток-2»",
            "description": "Премьер-министр Дании Ларс Лёкке Расмуссен заявил, что его страна может принять закон, который в конечном итоге позволит на юридических основаниях заблокировать или отложить реализацию проекта «Северный поток-2». Он также предложил вынести обсуждение строительства газопровода на общеевропейский уровень.",
            "image": "https://icdn.lenta.ru/images/2018/06/27/12/20180627123008968/pic_ad5185bfe17a33e78f3a44673730610a.jpg",
            "content": "<p>Proin varius arcu sollicitudin, suscipit elit blandit, congue dui. Donec id dictum magna, in feugiat risus. Sed vitae enim nulla. Praesent sit amet urna pretium, elementum enim vitae, luctus est. Fusce in porta erat, tincidunt sodales velit. Etiam venenatis nulla at est dictum, at feugiat mi aliquet. Fusce eu rutrum erat, non faucibus odio. Aliquam placerat urna quis purus suscipit, non porttitor tellus finibus. Proin consequat, nisl ut rutrum hendrerit, arcu tortor vestibulum tellus, euismod cursus nisi eros eu erat. Sed porttitor odio sapien, accumsan tempor velit laoreet sed. Cras varius ex vel dapibus sollicitudin.</p><p>Cras ultricies aliquam ante id interdum. Vestibulum porta sed neque in rhoncus. In hac habitasse platea dictumst. Praesent sed metus at nisl cursus aliquam. Pellentesque porta dictum viverra. Quisque risus erat, maximus finibus bibendum eget, egestas in enim. Phasellus volutpat, sapien nec varius rutrum, ante neque dictum ante, eu maximus diam dui consectetur justo.</p><p>Cras tempus sapien odio, quis laoreet nibh lacinia nec. Aenean convallis cursus nisl, quis elementum quam rhoncus sed. Duis id lobortis tortor. Donec velit lectus, laoreet in ornare in, scelerisque eget nisi. Vivamus et imperdiet turpis, non convallis mi. Fusce pellentesque condimentum turpis. Nulla vulputate risus erat. Praesent vestibulum mauris sed leo venenatis blandit ut id magna. Aenean consequat, massa sit amet pulvinar viverra, massa risus blandit diam, eu ultricies dui eros in metus. Nullam dignissim, neque a pharetra gravida, lacus ligula suscipit diam, eu rutrum ex quam eu sapien. Vestibulum auctor aliquam cursus. Nam in nibh eget magna venenatis viverra. Vivamus a viverra ex.</p>",
            "categoryId": 1,
            "category": {
                "id": 1,
                "category": "Популярные"
            }
        },
        {
            "id": 6,
            "title": "Работающие пенсионеры останутся без индексаций",
            "description": "По подсчетам кабинета министров, работающие пенсионеры имеют более высокие темпы роста оплаты труда по сравнению с прогнозами. Накопленная индексация будет учитываться «при окончательном расчете такого пенсионера». До 2016 года пенсии продолжающих работать россиян индексировались наравне с остальными выплатами.",
            "image": "https://icdn.lenta.ru/images/2018/06/27/12/20180627120538585/pic_e0f82891cecb372905789e6ccf154a17.jpg",
            "content": "<p>Curabitur faucibus mollis erat in gravida. Integer dictum ac nulla in laoreet. Pellentesque auctor magna in scelerisque vulputate. Phasellus id varius metus, eget commodo lorem. Mauris in rhoncus neque. Nam facilisis pharetra neque in iaculis. Nulla facilisi. Morbi nec sem non arcu viverra tristique sit amet eget eros. Praesent blandit sapien diam.</p><p>Maecenas et turpis arcu. Donec convallis neque at tellus posuere, a euismod risus porta. Curabitur sit amet sem eget mauris ornare egestas non ac dolor. Praesent ut ultrices velit, sit amet fermentum eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed faucibus velit id tempor eleifend. Integer rutrum mauris a erat bibendum consequat.</p><p>Aliquam sed consectetur nisi. Mauris facilisis leo quis congue consectetur. Ut lacus ex, vestibulum ut purus nec, accumsan condimentum tellus. Fusce auctor sapien in pellentesque gravida. Praesent euismod mi imperdiet nunc eleifend, vel fringilla felis auctor. Nullam vitae justo egestas, elementum quam sed, suscipit risus. Etiam faucibus magna vel lobortis hendrerit. In vulputate lobortis neque, a maximus turpis vestibulum sit amet. Mauris pulvinar sem erat, ut sollicitudin tellus faucibus ut. Nam sagittis erat tempus libero cursus, id efficitur arcu vulputate. Morbi viverra magna ac nibh laoreet porttitor. Curabitur at felis urna. Suspendisse eget vulputate sapien, consequat lacinia leo.</p><p>Praesent in libero ornare, volutpat massa ac, fermentum mi. In viverra, ex pharetra scelerisque porttitor, diam dui efficitur lorem, at congue nisi ipsum sed arcu. Donec ac metus a lectus sollicitudin vehicula. Fusce aliquam odio mauris, vel semper turpis efficitur quis. Proin efficitur ex quis vehicula ultricies. Fusce vulputate euismod accumsan. In rutrum suscipit magna sit amet aliquam. Phasellus tristique eros vel elit sodales cursus. Pellentesque vel feugiat lacus, eget dictum urna. Nulla accumsan sem ut diam varius, sed congue risus condimentum. Fusce dapibus dui in nibh vehicula, vitae facilisis nulla facilisis. Pellentesque eu erat vitae odio auctor dictum. Mauris non rhoncus quam. Phasellus eu dolor accumsan, congue eros sed, vulputate neque.</p><p>Sed tristique convallis ligula in tincidunt. In vulputate accumsan enim et pellentesque. Aliquam pretium ultrices tellus, sed dignissim ex feugiat nec. Aliquam erat volutpat. Quisque porttitor magna orci, eu vehicula arcu ultricies id. Morbi consectetur aliquam viverra. Nullam ullamcorper neque in diam luctus euismod nec id nunc. Sed arcu mi, finibus in auctor a, viverra id eros. Fusce eleifend accumsan nisi.</p>",
            "categoryId": 1,
            "category": {
                "id": 1,
                "category": "Популярные"
            }
        }
    ];
    
    const mock = new mockAdapter(instance);
    mock.onGet('/api/news/?_expand=category').reply(200, response)

    beforeEach(() => {
        store = new NewsListStore;
    })

    it('Signin test', async () => {   
        await store.request();
        expect(store.pending).toBe(PendingEnum.Loaded);
        expect(store.list).toEqual(response);
    });
})