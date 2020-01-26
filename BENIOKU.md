# Flarum için MathRen

[![MIT lisansı](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-mathren/blob/master/LICENSE) [![Son Stabil Sürüm](https://img.shields.io/packagist/v/the-turk/flarum-mathren.svg)](https://packagist.org/packages/the-turk/flarum-mathren) [![Toplam İndirme](https://img.shields.io/packagist/dt/the-turk/flarum-mathren.svg)](https://packagist.org/packages/the-turk/flarum-mathren)

Bu eklenti yardımıyla [Flarum](https://github.com/flarum) tartışmalarınız için TeX komutlarını işleyebilir ve matematiksel ifadeleri görselleştirebilirsiniz.

![Ekran görüntüsü](https://i.ibb.co/whsx4Yf/math-Ren-Post.png)

[Ayarların ekran görüntüsü için buraya tıklayın](https://i.ibb.co/3hVCKz0/math-Ren-Settings-Page.png)

## Özellikler

- İnternetteki en hızlı matematiksel dizgi kütüphanesi olan [KaTeX](https://github.com/KaTeX/KaTeX) tabanlıdır.
- Matematiksel ifadeleri satır içinde ya da satır dışında (blok) gösterebilirsiniz.
- _Markdown_ ve BBCode araçlarıyla uyumludur.
- Neredeyse tamamen kişiselleştirilebilir.
- Gereken bütün kaynak dosyaları paket içindedir.

## Kurulum

[Bazaar](https://discuss.flarum.org/d/5151) kullanın ya da elle kurulum yapın:

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

#### Sınırlayıcılar
Bu eklenti ile istediğiniz kadar sınırlayıcı kullanabilirsiniz ama bu sınırlayıcıları akıllıca seçmelisiniz. LaTeX, satır içi ifadelerin işlenmesinde orijinal olarak `$…$` sınırlayıcılarını kullanıyor ama bu durum forum ortamındaki yazışmalarda ardışık `$` işaretlerinin görüntülenmesini istenmedik bir şekilde bozabiliyor. MathRen ise varsayılan olarak blok ifadeler için `[math]...[/math]` ve satır içindeki ifadeler için `[imath]...[/imath]` sınırlayıcılarını kullanmaktadır (bu sınırlayıcılar eklenti ayarlarından değiştirilebilir) ve özel karakterler üzerinde herhangi bir işlem yapmamaktadır.

Eklentinin ayarlarında **Asıl BBCode sınırlayıcısı** ve **Ek sınırlayıcılar** olmak üzere iki yeni ifade göreceksiniz. Belirli nedenlerden dolayı sınırlayıcıları belirleyip matematiksel ifadeleri işlemede Regex kullanıp basit bir bul ve değiştir operasyonu gerçekleştiremediğimizden (Daha fazla bilgi için [tıklayın](https://github.com/Khan/perseus/blob/master/src/perseus-markdown.jsx)); ek sınırlayıcılar,   _asıl BBCode sınırlayıcıları_ için takma isim olarak kullanılır. Eğer ek sınırlayıcılar listenizde özel bir sınırlayıcı (`$$` gibi) bulunursa, MathRen bütün gönderide bu ek sınırlayıcıları arar ve asıl BBCode sınırlayıcılarıyla değiştirmeye çalışır ve bu da gönderi kaydının uzamasına neden olabilir. Bu davranışın önüne geçmek için ek sınırlayıcı listenizde özel sınırlayıcılar yerine sadece BBCode sınırlayıcıları kullanabilirsiniz. Böyle bir durumda ek BBCode sınırlayıcıları, asıl BBCode sınırlayıcılarıyla değiştirilmeyecek ve olduğu gibi bırakılacaktır.

#### Blok İfadeler

TeX komutunuzu `[math]` ve `[/math]` sınırlayıcıları veya sizin belirlediğiniz sınırlayıcılar arasına yazın.

```
[math]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]
```

Blok ifadeler varsayılan olarak `<span class="mathren-block">...</span>` arasına gömülecektir.

#### Satır İçi İfadeler

TeX komutunuzu `[imath]` ve `[/imath]` sınırlayıcıları veya sizin belirlediğiniz sınırlayıcılar arasına yazın.

```
Lorem ipsum dolor [imath]\varDelta = b^2-4ac[/imath] sit amet.
```

Satır içi ifadeler varsayılan olarak `<span class="mathren-inline">...</span>` arasına gömülecektir.

### Atlanan İfadeler

Eğer TeX komutunuzu sınırlayıcılarla birlikte göstermek isterseniz, iki seçeneğiniz bulunuyor:

1. İfadelerinizi \`backtick\` ya da `code` etiketi içine gömün.
  + Ayarlar sayfasından bu etiketi _atlanan etiket_ olarak ayarlamalısınız.
2. İfadelerinizi anahtar bir kelime ile birlikte (atlamayı belirleyici kelime) yazın.
  + Bu kelime varsayılan olarak `ignore` değerine ayarlıdır. Bu kelimeyi ayarlar sayfasından değiştirebilir ya da aynı işi yapması için birden fazla kelime atayabilirsiniz. Atadığınız bu kelimelerden herhangi birini daha sonra _özel_ bir sağ sınırlayıcının hemen yanına süslü parantezlerle birlikte (örn. `$$...$${kelime}`, `\(...\){kelime}`) ya da bir BBCode içinde (örn. `[math=kelime]...[/math]`) kullanacaksınız. `[math]%e%[/math]{kelime}` ifadesinin yanlış bir kullanım olduğuna dikkat edin.

Aşağıdaki ifadeler işlenmeyecektir:

```
`[math]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]`
[math=ignore]\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi[/math]
[imath=ignore]\varDelta = b^2-4ac[/imath]
$$\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi$${ignore}
\[\int_{-\infty}^\infty\hat\xi\,e^{2\pi i\xi x}\,d\xi\]{ignore}
\(\varDelta = b^2-4ac\){ignore}
```

Eğer ikinci seçeneği tercih ederseniz, atlanan ifadeler varsayılan olarak `<span class="{mathren-inline|mathren-block} mathren-ignore">...</span>` arasına gömülecektir.

## Bağlantılar

- [Flarum tartışma konusu](https://discuss.flarum.org/d/22439-mathren-tex-math-rendering)
- [GitHub üzerindeki kaynak kodu](https://github.com/the-turk/flarum-mathren)
- [Değişiklikler](https://github.com/the-turk/flarum-mathren/blob/master/CHANGELOG.md)
- [Sorun bildir](https://github.com/the-turk/flarum-mathren/issues)
- [Packagist aracılığıyla indir](https://packagist.org/packages/the-turk/flarum-mathren)