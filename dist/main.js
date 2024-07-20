(()=>{"use strict";!function(){const e=document.querySelectorAll(".header-nav__link");e.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),e.forEach((e=>{e.classList.remove("emphasized")})),t.target.classList.add("emphasized")}))}))}(),function(){const e=document.querySelectorAll(".projects-menu__element"),t=document.querySelectorAll(".projects-list__link"),n=document.querySelector(".projects-menu__element-wrapper"),a=document.querySelectorAll(".projects-photo"),s=document.querySelector(".projects-menu__img-left"),i=document.querySelector(".projects-menu__img-right"),o=document.querySelectorAll(".description-element__subtitle.city"),l=document.querySelectorAll(".description-element__subtitle.area"),c=document.querySelectorAll(".description-element__subtitle.time");let d=1;const p=n=>{n<1?d=a.length:n>a.length&&(d=1),o.forEach((e=>e.style.display="none")),l.forEach((e=>e.style.display="none")),c.forEach((e=>e.style.display="none")),a.forEach((e=>e.classList.remove("active-slide"))),e.forEach((e=>e.classList.remove("active"))),t.forEach((e=>e.classList.remove("special"))),o[d-1].style.display="block",l[d-1].style.display="block",c[d-1].style.display="block",a[d-1].classList.add("active-slide"),e[d-1].classList.add("active"),t[d-1].classList.add("special")},r=e=>{p(d+=e)},m=e=>{p(d=e)};document.addEventListener("DOMContentLoaded",(()=>{p(d),s.addEventListener("click",(()=>r(-1))),i.addEventListener("click",(()=>r(1))),n.addEventListener("click",(t=>{e.forEach(((e,n)=>{t.target===e&&m(n+1)}))})),t.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),m(t+1)}))})),slideInterval=setInterval((()=>{r(1)}),5e3)}))}(),async function(){const e=document.querySelectorAll(".fantasies-list__element"),t=JSON.parse('\n {\n  "list": [\n    {\n      "style": "American classic",\n      "images": [\n        "./Images/PNG/фото1.png",\n        "./Images/PNG/фото2.png",\n        "./Images/PNG/фото3.png",\n        "./Images/PNG/фото4.png"\n      ]\n    },\n    {\n      "style": "Empire",\n      "images": [\n        "https://www.topdom.ru/uploaded/article/empire-style/2.jpg",\n        "https://rehouz.info/wp-content/uploads/2016/09/Apartamentos_de_Napoleon-1.jpg",\n        "https://phoenix-group.ru/upload/medialibrary/stati/2-interier-s-lepninoj-i-mebelyu-v-stile-ampir.jpg",\n        "https://comfortoria.ru/wp-content/uploads/2017/05/interer-v-stile-ampir-2.jpg"\n      ]\n    },\n    {\n      "style": "Classical",\n      "images": [\n        "https://www.ivd.ru/images/cache/2019/3/18/widen_414_q90_705751_03957e7ada.jpeg",\n        "https://www.belfan.ru/upload/iblock/b49/kakuyu-vybrat4_mebel-dlya-spalni-v-klassicheskom-vide.jpg",\n        "https://avatars.dzeninfra.ru/get-zen_doc/3380298/pub_62c7246e58672e36bfd42188_62c72630c12e246f395c7aa7/scale_1200",\n        "https://salon.ru/storage/thumbs/gallery/274/273772/835_3500_s840.jpg"\n      ]\n    },\n    {\n      "style": "Loft",\n      "images": [\n        "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6540b7241a4d481dafb25470_6540cce1cbc777678cdb615a/scale_1200",\n        "https://www.belfan.ru/upload/iblock/bd8/cherty_spalnya_v_stile_loft.jpg",\n        "https://old-loft.com/wp-content/uploads/komnata-dlya-parnya-v-stile-loft-1.jpg",\n        "https://viyarbazar.com/upload/iblock/5e5/5e5bdd1227df073d00182b5905fb9338.jpg"\n      ]\n    },\n    {\n      "style": "Minimalism",\n      "images": [\n        "https://mdhome.ru/images/wp-content/uploads/2018/10/6-32-728x1092.jpg",\n        "https://storage.yandexcloud.net/rerooms/uploads/project_image/file/26618/version_1920_fit_2-sp005.jpg",\n        "https://api.woodfans.ru/storage/uploads/images/Q0qpzbIupxkrYJ0zghU34ewr0YV3Z0yiohAuxtAB_widened_1200.webp",\n        "https://www.ivd.ru/images/cache/2019/7/22/widen_414_q90_960161_aae1232224.jpeg"\n      ]\n    },\n    {\n      "style": "Provence",\n      "images": [\n        "https://i.pinimg.com/originals/b6/80/2a/b6802a77912e765db23b733b70b5759d.jpg",\n        "https://mebel169.ru/uploads/media/Articles/idei-dizajna-spalni-v-stile-provans/resize/converted-0-spalnya_widen-exact_custom_720x.jpg",\n        "https://lh3.googleusercontent.com/proxy/xd86If4zqjYVAnrynnJc8HJyY3MmQtfTcP4UGT4p2wvbAiCve8oq7jckRwRCDijNOnH7doRFwj5sAn4nWjYinQ_BEy_wURPDcjQ_pJcwBsm_tjHKi654-WjgJMnquVMi4VtZMBGf4xjEXQQDBBc8HmXXSKmsYzL2YU8",\n        "https://viyarbazar.com/upload/iblock/467/467aa4bd294d007817f4772b082f1d9e.jpg"\n      ]\n    },\n    {\n      "style": "Romanticism",\n      "images": [\n        "https://4room.ua/files/userdata/%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D1%82%D0%B8%D0%B7%D0%BC_2_3.jpg",\n        "https://www.angstrem-mebel.ru/upload/medialibrary/afd/afdfa2424c5407cb1db1b0488d162461.jpg",\n        "https://astana.expertremonta.kz/img/category_slider/46/article126_3.jpg",\n        "https://na-dache.pro/uploads/posts/2023-12/1702772553_na-dache-pro-p-krasivie-foto-stili-interera-romantizm-62.jpg"\n      ]\n    },\n    {\n      "style": "Scandinavian style",\n      "images": [\n        "https://st.hzcdn.com/simgs/pictures/kids-rooms/kvartira-na-petrogradke-svetlana-olenburg-img~e33106880f69ca75_14-0035-1-ac3d456.jpg",\n        "https://www.podushka.net/uploads/detskaya-v-stile-skandi.jpg",\n        "https://ldesign.studio/wp-content/uploads/2020/10/detskaya-skandinaviya-2.jpg",\n        "https://photopole.ru/wp-content/uploads/spalnia-v-stile-skandi-6.webp"\n      ]\n    },\n    {\n      "style": "Mediterranean style",\n      "images": [\n        "https://www.pufikhomes.com/wp-content/uploads/2018/06/7.jpg",\n        "https://b6.3ddd.ru/media/gallery_images/5338239c70598.jpeg",\n        "https://robdom.ru/upload/iblock/094/spalnya_v_sredizemnomorskom_stile.jpg",\n        "https://my-dom.design/wp-content/uploads/2019/05/chist-7.jpg"\n      ]\n    },\n    {\n      "style": "High tech",\n      "images": [\n        "https://pesochnica.biz/upload/iblock/692/69263c0cc0609ce1f761f3eaedf68964.jpg",\n        "https://studio-mint.ru/sites/default/files/sites/default/files/imce/spalnya-v-stile-hay-tek-70.jpg",\n        "https://www.podushka.net/uploads/dekor-dlya-spalni-haj-tek.jpg",\n        "https://cdn.inmyroom.ru/uploads/photo/file/e7/e7f0/base_e7f052d0-01d5-4811-aeb1-6f13171226c8.jpg"\n      ]\n    },\n    {\n      "style": "Eclecticism",\n      "images": [\n        "https://www.ivd.ru/uploads/59afd7e9c28dc.jpg",\n        "https://evdom.ru/wp-content/uploads/2019/06/living-casa-cor-parana-20163726.jpg",\n        "https://evdom.ru/wp-content/uploads/2019/06/68376d49-13e7-4826-aada-773e921dae47.f10.jpg",\n        "https://st.dg-home.ru/upload/resize_cache/blog_editor/7d0/900_900_0/komnata_v_stile_ehklektika_2.jpg"\n      ]\n    }\n  ]\n}\n').list,n=document.querySelector(".fantasies-img1"),a=document.querySelector(".fantasies-img2"),s=document.querySelector(".fantasies-img3"),i=document.querySelector(".fantasies-img4");e.forEach((o=>{o.addEventListener("click",(o=>{e.forEach((e=>{e.classList.remove("detailed")})),o.target.classList.add("detailed");const l=o.target.textContent.trim(),c=t.find((e=>e.style===l));c&&c.images.length>=4?[n,a,s,i].forEach(((e,t)=>{e.classList.remove("loaded"),setTimeout((()=>{e.style.backgroundImage=`url(${c.images[t]})`,e.classList.add("loaded")}),50)})):console.warn(`Недостаточно изображений для стиля ${l}`)}))}))}()})();