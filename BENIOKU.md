# Flarum için MathRen

[![MIT lisansı](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-mathren/blob/master/LICENSE) [![Son Stabil Sürüm](https://img.shields.io/packagist/v/the-turk/flarum-mathren.svg)](https://packagist.org/packages/the-turk/flarum-mathren) [![Toplam İndirme](https://img.shields.io/packagist/dt/the-turk/flarum-mathren.svg)](https://packagist.org/packages/the-turk/flarum-mathren)

Bu eklenti yardımıyla [Flarum](https://github.com/flarum) tartışmalarınız için TeX komutlarını işleyebilir ve matematiksel ifadeleri görselleştirebilirsiniz.

![Ekran görüntüsü](https://i.ibb.co/3WpHVrH/mathren.png)

![Ön izleme](https://i.imgur.com/GEkwFtR.gif)

[Ayarların ekran görüntüsü için buraya tıklayın](https://i.ibb.co/nnVnqZs/mathren-settings.png)

## Özellikler

- İnternetteki en hızlı matematiksel dizgi kütüphanesi olan [KaTeX](https://github.com/KaTeX/KaTeX) tabanlıdır.
- Matematiksel ifadeleri satır içinde ya da satır dışında (blok) gösterebilirsiniz.
- _Markdown_ ve BBCode araçlarıyla uyumludur.
- Ön izleme modunda çalışır.
- Herhangi bir matematiksel ifadenin kaynak kodunu kopyalayabilirsiniz.
- `flarum/mentions` eklentisi ile uyumludur. Matematiksel ifadeler üzerinden alıntı yapabilirsiniz.
- Gereken bütün kaynak dosyaları paket içindedir.

## Kurulum

```bash
composer require the-turk/flarum-mathren
```

## Güncelleme

```bash
composer update the-turk/flarum-mathren
php flarum cache:clear
```

## Kullanım

Eklentiyi aktif edin.

#### Blok İfadeler

TeX komutunuzu `[math]` ve `[/math]` sınırlayıcıları veya sizin belirlediğiniz sınırlayıcılar arasına yazın.

```
[math]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]
```

Blok ifadeler `.mathren-block` sınıfına gömülecektir.

#### Satır İçi İfadeler

TeX komutunuzu `[imath]` ve `[/imath]` sınırlayıcıları veya sizin belirlediğiniz sınırlayıcılar arasına yazın.

```
Lorem ipsum dolor [imath]\varDelta = b^2-4ac[/imath] sit amet.
```

Satır içi ifadeler `.mathren-inline` sınıfına gömülecektir.

### Atlanan İfadeler

Eğer TeX komutunuzu sınırlayıcılarla birlikte göstermek isterseniz, üç seçeneğiniz bulunuyor:

1. İfadelerinizi \`backtick\` ya da `code` etiketi içine gömün.
  + Ayarlar sayfasından bu etiketi _atlanan etiket_ olarak ayarlamalısınız.
2. İfadelerinizi, eklenti tarafından atlanacak bir sınıf içine gömün.
  + Atlanacak sınıfları ayarlar sayfasından ayarlayabilirsiniz.
3. İfadelerinizi anahtar bir kelime ile birlikte (atlamayı belirleyici kelime) yazın.
  + Bu kelime varsayılan olarak `ignore` değerine ayarlıdır. Bu kelimeyi ayarlar sayfasından değiştirebilir ya da aynı işi yapması için birden fazla kelime atayabilirsiniz. Atadığınız bu kelimelerden herhangi birini BBCode içinde (örn. `[math=kelime]...[/math]`) kullanacaksınız.

Atlanan ifadeler varsayılan olarak `.mathren-ignore` sınıfına gömülecektir. Bunu eklenti ayarları sayfasından değiştirebilirsiniz.

## Bağlantılar

- [Flarum tartışma konusu](https://discuss.flarum.org/d/22439-mathren-tex-math-rendering)
- [GitHub üzerindeki kaynak kodu](https://github.com/the-turk/flarum-mathren)
- [Değişiklikler](https://github.com/the-turk/flarum-mathren/blob/master/CHANGELOG.md)
- [Sorun bildir](https://github.com/the-turk/flarum-mathren/issues)
- [Packagist aracılığıyla indir](https://packagist.org/packages/the-turk/flarum-mathren)
