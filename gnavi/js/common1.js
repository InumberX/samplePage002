$(function () {
  var $body = $('body');
  var pointY;

  //開閉用ボタンをクリックでクラスの切替え
  $('#GLOBAL_NAVIGATION_BTN').on('click', function () {

    // bodyにクラスを付与
    $body.toggleClass('open');
    // 現在のスクロール位置を取得
    pointY = $(window).scrollTop();
    // 親画面を固定する
    $('#wrapper').css({
      'position': 'fixed',
      'width': '100%',
      'top': -pointY
    });

    // モーダルのトップを表示
    $('body, html').animate({ scrollTop: 0 }, 0);

  });

  //メニュー名以外の部分をクリックで閉じる
  $('#MODAL_GLOBAL_NAVIGATION').on('click', function () {

    // bodyからクラスを削除
    $body.removeClass('open');

    // 親画面のCSSの指定を削除
    $('#wrapper').css({
      'position': 'relative',
      'width': '',
      'top': ''
    });

    // モーダルを開く前のスクロール位置まで移動する
    $(window).scrollTop(pointY);
  });
});
