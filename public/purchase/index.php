<?php require($_SERVER['DOCUMENT_ROOT'] . '/_inc/init.php'); ?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0,minimum-scale=1,maximum-scale=5">
    <meta name="format-detection" content="telephone=no">
    <title>泉菜ECショップ</title>
    <meta name="description" content="">
    <meta name="keywords" content=""/>
    <link rel="apple-touch-icon" sizes="180x180" href="">
    <link rel="icon" type="image/jpg" sizes="32x32" href="">
    <link rel="icon" type="image/jpg" sizes="16x16" href="">
    <link rel="manifest" href="">
    <link rel="mask-icon" href="">
    <meta name="theme-color" content="">
    <meta property="og:title" content="">
    <meta property="og:type" content="website">
    <meta property="og:image" content="">
    <meta property="og:url" content="">
    <meta property="og:description" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <link rel="stylesheet" href="/asset/css/bundle.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/Scrollintrolugin.min.js"></script> -->
    <!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script> -->
</head>

<body>

<div id="wrapper">

    <?php require(HEADER_FILE); ?>

    <main id="page">
        <div id="contents">
            
            <section class="js-load p-common-fv p-purchase-fv">
                <div class="u-img__bg-cover p-common-fv__wrapper">
                    <div class="p-common-fv__img">
                        <div class="u-img__bg-def p-common-fv__img-item"></div>
                    </div>
                    <div class="p-common-fv__msg">
                        <h2 class="p-common-fv__msg-ttl">
                            <span class="p-common-fv__msg-ttl__main"  data-ttl="販">販</span>
                            <span class="p-common-fv__msg-ttl__main"  data-ttl="売">売</span>
                            <span class="p-common-fv__msg-ttl__main"  data-ttl="商">商</span>
                            <span class="p-common-fv__msg-ttl__main"  data-ttl="品">品</span>
                            <span class="p-common-fv__msg-ttl__sub">Purchase</span>
                        </h2>
                        <p class="p-common-fv__msg-txt">
                            ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                        </p>
                    </div>
                </div>
            </section>

            <!-- <div class="p-purchase-gallery">
                <div class="u-width__sec p-purchase-gallery__wrapper">
                    <div class="p-purchase-gallery__img">
                        <div class="u-img__bg-def p-purchase-gallery__img-item"></div>
                    </div>
                    <div class="p-purchase-gallery__img">
                        <div class="u-img__bg-def p-purchase-gallery__img-item"></div>
                    </div>
                    <div class="p-purchase-gallery__img">
                        <div class="u-img__bg-def p-purchase-gallery__img-item"></div>
                    </div>
                    <div class="p-purchase-gallery__img">
                        <div class="u-img__bg-def p-purchase-gallery__img-item"></div>
                    </div>
                </div>
            </div> -->

            <section class="p-purchase-product">
                <div class="u-width__sec p-purchase-product__wrapper">
                    <h2 class="c-ttl__sec p-purchase-product__ttl">
                        <span class="">販売商品</span>
                    </h2>
                    <div class="u-width__sec-container p-purchase-product__container">
                        <ul class="p-purchase-product__list">
                            <li class="p-purchase-product__item">
                                <div class="p-purchase-product__item-main">
                                    <div class="p-purchase-product__item-main-imgs">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__top" src="/asset/img/purchase/product-imo-1.jpeg" alt="">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__bottom" src="/asset/img/purchase/product-imo-2.jpeg" alt="">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__bottom" src="/asset/img/purchase/product-imo-3.jpeg" alt="">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__bottom" src="/asset/img/purchase/product-imo-4.jpeg" alt="">
                                    </div>
                                    <div class="p-purchase-product__item-main-content">
                                        <h3 class="p-purchase-product__item-main-content-ttl">
                                            <span>〇〇里芋</span>
                                        </h3>
                                        <span class="p-purchase-product__item-main-content-detail">9,999円 / 99kg</span>
                                        <a class="p-purchase-product__item-main-content-link" href="">カートに入れる</a>
                                    </div>
                                </div>
                                <div class="p-purchase-product__item-sub">
                                    <ul class="p-purchase-product__item-sub-list">
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>商品詳細</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>保存方法</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>発送方法</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>調理例</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="p-purchase-product__item">
                                <div class="p-purchase-product__item-main">
                                    <div class="p-purchase-product__item-main-imgs">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__top" src="/asset/img/purchase/product-negi-1.jpeg" alt="">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__bottom" src="/asset/img/purchase/product-negi-2.jpeg" alt="">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__bottom" src="/asset/img/purchase/product-negi-3.jpeg" alt="">
                                        <img class="p-purchase-product__item-main-img p-purchase-product__item-main-img__bottom" src="/asset/img/purchase/product-negi-4.jpeg" alt="">
                                    </div>
                                    <div class="p-purchase-product__item-main-content">
                                        <h3 class="p-purchase-product__item-main-content-ttl">
                                            <span>〇〇ねぎ</span>
                                        </h3>
                                        <span class="p-purchase-product__item-main-content-detail">9,999円 / 99kg</span>
                                        <a class="p-purchase-product__item-main-content-link" href="">カートに入れる</a>
                                    </div>
                                </div>
                                <div class="p-purchase-product__item-sub">
                                    <ul class="p-purchase-product__item-sub-list">
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>商品詳細</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>保存方法</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>発送方法</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                        <li class="p-purchase-product__item-sub-item">
                                            <h4 class="p-purchase-product__item-sub-item-ttl">
                                                <span>調理例</span>
                                            </h4>
                                            <p class="c-txt__sec p-purchase-product__item-sub-item-txt">
                                                ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </div>
    </main>

    <?php require(FOOTER_FILE); ?>

</div>


<script src="/asset/js/app.bundle.js" defer></script>


</body>
</html>