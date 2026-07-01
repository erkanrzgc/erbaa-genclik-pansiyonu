/**
 * SSS (Sıkça Sorulan Sorular) — GERÇEK misafir sorularından derlenmiştir.
 *
 * ⚠️ DÜRÜSTLÜK: Cevaplar business config + odalardaki gerçek donanımla birebir uyumludur.
 *    Uydurma bilgi YOK. Emin olunmayan konular (fiyat, özel talepler) telefon/WhatsApp'a
 *    yönlendirir — bu da işletmenin fiilî çalışma biçimidir.
 *
 * Faq.astro bu listeyi hem görünür akordeon hem de FAQPage JSON-LD olarak basar.
 * Not: Google, otel/pansiyon FAQ'leri için "yıldızlı zengin sonuç"u çoğu zaman
 * göstermez; asıl fayda gerçek içerik derinliği + misafire net cevaptır.
 */
export interface FaqItem {
  /** Misafirin gerçekte sorduğu soru. */
  q: string;
  /** Config/odalarla doğrulanmış dürüst cevap (düz metin). */
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    q: 'Erbaa Gençlik Pansiyonu nerede, merkeze yakın mı?',
    a: 'Adresimiz Fatih Sultan Mehmet Mahallesi, Erek Caddesi, Gül Sokak No:6, Erbaa / Tokat. Şehir merkezinde; çarşıya ve ulaşım noktalarına yürüme mesafesinde, ulaşımı kolay bir konumdayız.',
  },
  {
    q: 'Konaklama fiyatları ne kadar, rezervasyonu nasıl yaptırırım?',
    a: 'Güncel fiyat ve boş oda durumunu en doğru şekilde telefonla arayarak ya da WhatsApp’tan yazarak öğrenebilirsiniz. 7/24 açık resepsiyonumuz rezervasyonunuzda size yardımcı olur.',
  },
  {
    q: 'Odalarda özel banyo ve sıcak su var mı?',
    a: 'Evet. Tüm odalarımızda özel banyo ve 24 saat sıcak su bulunur.',
  },
  {
    q: 'Ücretsiz Wi-Fi var mı?',
    a: 'Evet, pansiyonun tamamında ücretsiz Wi-Fi mevcuttur.',
  },
  {
    q: 'Odalarda televizyon, buzdolabı ve çalışma masası var mı?',
    a: 'Evet, odalarımızda televizyon, buzdolabı ve çalışma masası bulunur.',
  },
  {
    q: 'Giriş ve çıkış (check-in / check-out) saatleri nedir?',
    a: 'Giriş saati 14:00, çıkış saati 12:00’dir. Resepsiyonumuz 7 gün 24 saat açıktır.',
  },
  {
    q: 'Odalarda klima var mı?',
    a: 'Odalarımızda klima yerine vantilatör bulunmaktadır.',
  },
  {
    q: 'Hangi oda tipleri mevcut?',
    a: 'Standart Oda, Geniş İkili Oda ve Banyolu Konfor Oda seçeneklerimiz vardır. İhtiyacınıza en uygun oda için bizi arayabilir veya WhatsApp’tan yazabilirsiniz.',
  },
  {
    q: 'Erbaa’da pansiyona nasıl ulaşırım?',
    a: 'Erbaa merkezde, kolay ulaşılan bir konumdayız. Sitemizdeki “Yol Tarifi Al” butonuyla Google Haritalar üzerinden adım adım yol tarifi alabilirsiniz.',
  },
];
