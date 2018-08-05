$(function () {
  var $body = $('body');
  var pointY;

  $('#GNV_OPEN_BTN').on('click', function () {

    // メニューを開いた場合
    if(!$body.hasClass('side-open')) {
      // 現在のスクロール位置を取得
      pointY = $(window).scrollTop();

      // 親画面を固定する
      $('#wrapper').css({
        'position': 'fixed',
        'width': '100%',
        'top': -pointY
      });

      // メニューのトップを表示
      $('body, html').animate({ scrollTop: 0 }, 0);

      // bodyにクラスを付与
      $body.toggleClass('side-open');

      // メニューのテキストを変更
      $('#GNV_OPEN_BTN').text('CLOSE');

    } else {
      // メニューを閉じた場合
      // 親画面のCSSの指定を削除
      $('#wrapper').css({
        'position': 'relative',
        'width': '',
        'top': ''
      });

      // bodyからクラスを削除
      $body.removeClass('side-open');

      // メニューのテキストを変更
      $('#GNV_OPEN_BTN').text('MENU');

      // メニューを開く前のスクロール位置まで移動する
      $(window).scrollTop(pointY);
    }

  });

  $('#GNV_OVER_RAY').on('click', function () {

    // 親画面のCSSの指定を削除
    $('#wrapper').css({
      'position': 'relative',
      'width': '',
      'top': ''
    });

    // メニューを開く前のスクロール位置まで移動する
    $(window).scrollTop(pointY);

    // bodyからクラスを削除
    $body.removeClass('side-open');

  });
});
