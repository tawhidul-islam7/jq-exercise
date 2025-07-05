$(document).ready(function () {
  // Example 001
  $('#btnAlert').click(function () {
    alert('Button clicked!');
  });

  // Example 002
  $('#btnHide').click(function () {
    $('#hideBox').hide();
  });

  // Example 003
  $('#btnShow').click(function () {
    $('#hideBox').show();
  });

  // Example 004
  $('#btnToggle').click(function () {
    $('#hideBox').toggle();
  });

  // Example 005
  $('#btnChangeText').click(function () {
    $('#textPara').text('Text has been changed!');
  });

  // Example 006
  $('#btnChangeHtml').click(function () {
    $('#htmlPara').html('Changed <i>italic</i> text.');
  });

  // Example 007
  $('#btnAddClass').click(function () {
    $('#addClassBox').addClass('highlight');
  });

  // Example 008
  $('#btnRemoveClass').click(function () {
    $('#addClassBox').removeClass('highlight');
  });

  // Example 009
  $('#btnToggleClass').click(function () {
    $('#addClassBox').toggleClass('highlight');
  });

  // Example 010
  $('#btnAppend').click(function () {
    $('#appendPara').append(' Appended!');
  });

   // Example 006
  $('#btnChangeHtml').click(function () {
    $('#htmlPara').html('Changed <i>italic</i> text.');
  });

  // Example 007
  $('#btnAddClass').click(function () {
    $('#addClassBox').addClass('highlight');
  });

  // Example 008
  $('#btnRemoveClass').click(function () {
    $('#addClassBox').removeClass('highlight');
  });

  // Example 009
  $('#btnToggleClass').click(function () {
    $('#addClassBox').toggleClass('highlight');
  });

  // Example 010
  $('#btnAppend').click(function () {
    $('#appendPara').append(' Appended!');
  });
   // Example 011–020
  $('#btnPrepend').click(function () {
    $('#prependPara').prepend('Prepended! ');
  });
  $('#btnBefore').click(function () {
    $('#beforePara').before('<b>Before Text</b><br>');
  });
  $('#btnAfter').click(function () {
    $('#afterPara').after('<br><b>After Text</b>');
  });
  $('#btnEmpty').click(function () {
    $('#emptyPara').empty();
  });
  $('#btnRemoveElement').click(function () {
    $('#removeMe').remove();
  });
  $('#btnFadeOut').click(function () {
    $('#fadeBox').fadeOut();
  });
  $('#btnFadeIn').click(function () {
    $('#fadeBox').fadeIn();
  });
  $('#btnSlideUp').click(function () {
    $('#slideBox').slideUp();
  });
  $('#btnSlideDown').click(function () {
    $('#slideBox').slideDown();
  });
  $('#btnToggleSlide').click(function () {
    $('#slideBox').slideToggle();
  });
   // Example 021–030
  $('#btnSetAttr').click(function () {
    $('#image1').attr('src', 'https://via.placeholder.com/150');
  });
  $('#btnGetAttr').click(function () {
    alert($('#image1').attr('src'));
  });
  $('#btnSetVal').click(function () {
    $('#inputVal').val('Updated Value');
  });
  $('#btnGetVal').click(function () {
    alert($('#inputVal').val());
  });
  $('#btnOnClick').on('click', function () {
    $('#onClickResult').text('Clicked using .on()');
  });
  $('#btnHover').hover(function () {
    $('#hoverBox').css('background', 'lightblue');
  }, function () {
    $('#hoverBox').css('background', '');
  });
  $('#btnKeyUp').keyup(function () {
    $('#keyUpResult').text($(this).val());
  });
  $('#btnFocus').focus(function () {
    $(this).css('background', 'yellow');
  });
  $('#btnBlur').blur(function () {
    $(this).css('background', '');
  });
  $('#btnClone').click(function () {
    $('#cloneMe').clone().appendTo('#cloneContainer');
  });
   // Example 031
  $('#btnTextLength').click(function () {
    const len = $('#lengthPara').text().length;
    $('#lengthResult').text('Length: ' + len);
  });

  // Example 032
  $('#btnAttrMultiple').click(function () {
    $('#multiImage').attr({
      src: 'https://via.placeholder.com/120',
      alt: 'Updated Image'
    });
  });

  // Example 033
  $('#btnAnimateBox').click(function () {
    $('#animateBox').animate({ left: '250px', opacity: 0.5 }, 1000);
  });

  // Example 034
  $('#btnHideShowToggle').click(function () {
    $('#toggleText').is(':visible') ? $('#toggleText').hide() : $('#toggleText').show();
  });

  // Example 035
  $('#btnToggleText').click(function () {
    let text = $('#textTogglePara').text();
    $('#textTogglePara').text(text === 'ON' ? 'OFF' : 'ON');
  });

  // Example 036
  $('#btnFilterEven').click(function () {
    $('li').filter(':even').css('color', 'blue');
  });

  // Example 037
  $('#btnRemoveItems').click(function () {
    $('li').remove();
  });

  // Example 038
  $('#btnEachLoop').click(function () {
    $('ul#eachList li').each(function (index) {
      $(this).text('Item ' + (index + 1));
    });
  });

  // Example 039
  $('#btnGetCss').click(function () {
    const bg = $('#cssBox').css('background-color');
    alert('Background color: ' + bg);
  });

  // Example 040
  $('#btnSetCss').click(function () {
    $('#cssBox').css({
      'background-color': 'tomato',
      'color': 'white'
    });
  });
   // Example 041
  $('#btnFadeToggle').click(function () {
    $('#fadeToggleBox').fadeToggle();
  });

  // Example 042
  $('#btnSlideFadeCombo').click(function () {
    $('#comboBox').fadeOut(300).slideUp(300);
  });

  // Example 043
  $('#btnDisableInput').click(function () {
    $('#inputDisable').prop('disabled', true);
  });

  // Example 044
  $('#btnEnableInput').click(function () {
    $('#inputDisable').prop('disabled', false);
  });

  // Example 045
  $('#btnIsChecked').click(function () {
    const checked = $('#checkMe').is(':checked');
    alert(checked ? 'Checked' : 'Not checked');
  });

  // Example 046
  $('#btnSelectChange').change(function () {
    const value = $(this).val();
    $('#selectResult').text('Selected: ' + value);
  });

  // Example 047
  $('#btnKeyPress').keypress(function (e) {
    $('#keyPressResult').text('You pressed: ' + e.key);
  });

  // Example 048
  $('#btnMouseEnter').mouseenter(function () {
    $(this).text('Mouse Entered!');
  });

  // Example 049
  $('#btnMouseLeave').mouseleave(function () {
    $(this).text('Mouse Left!');
  });

  // Example 050
  $('#btnScrollEvent').on('scroll', function () {
    $('#scrollStatus').text('You are scrolling!');
  });
 // Example 051
  $('#btnDelayShow').click(function () {
    $('#delayedText').delay(500).fadeIn();
  });

  // Example 052
  $('#btnMultipleAnimate').click(function () {
    $('#multiAnim').animate({ left: '100px' }, 500)
                   .animate({ top: '50px' }, 500)
                   .animate({ opacity: 0.5 }, 500);
  });

  // Example 053
  $('#btnStopAnimation').click(function () {
    $('#multiAnim').stop();
  });

  // Example 054
  $('#btnFocusChange').focus(function () {
    $(this).val('Focused!');
  });

  // Example 055
  $('#btnBlurChange').blur(function () {
    $(this).val('Blurred!');
  });

  // Example 056
  $('#btnToggleTextColor').click(function () {
    $('#colorText').css('color', function (_, current) {
      return current === 'rgb(255, 0, 0)' ? 'green' : 'red';
    });
  });

  // Example 057
  $('#btnFormSubmit').submit(function (e) {
    e.preventDefault();
    $('#submitMsg').text('Form Submitted!');
  });

  // Example 058
  $('#btnChangeAllInputs').click(function () {
    $('input[type="text"]').val('Changed');
  });

  // Example 059
  $('#btnAttrCheck').click(function () {
    const hasAttr = $('#attrTest').is('[data-role]');
    alert(hasAttr ? 'Has data-role' : 'No data-role');
  });

  // Example 060
  $('#btnToggleVisibility').click(function () {
    $('#visibilityBox').css('visibility', function (_, val) {
      return val === 'hidden' ? 'visible' : 'hidden';
    });
  });
   // Example 061
  $('#btnCountDivs').click(function () {
    const count = $('div').length;
    $('#divCountResult').text('Div Count: ' + count);
  });

  // Example 062
  $('#btnResetForm').click(function () {
    $('#formToReset')[0].reset();
  });

  // Example 063
  $('#btnScrollTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  // Example 064
  $('#btnAddOption').click(function () {
    $('#selectBox').append('<option>New Option</option>');
  });

  // Example 065
  $('#btnRemoveOption').click(function () {
    $('#selectBox option:last').remove();
  });

  // Example 066
  $('#btnSetTitle').click(function () {
    $('title').text('New Title Set by jQuery');
  });

  // Example 067
  $('#btnCountChecked').click(function () {
    const count = $('input[type="checkbox"]:checked').length;
    $('#checkedCount').text('Checked: ' + count);
  });

  // Example 068
  $('#btnShowDate').click(function () {
    $('#dateDisplay').text(new Date().toLocaleString());
  });

  // Example 069
  $('#btnAppendListItem').click(function () {
    $('#dynamicList').append('<li>New Item</li>');
  });

  // Example 070
  $('#btnCloneInput').click(function () {
    $('#inputToClone').clone().appendTo('#cloneInputContainer');
  });
  // Example 071
  $('#btnDisableAll').click(function () {
    $('input, button').prop('disabled', true);
  });

  // Example 072
  $('#btnEnableAll').click(function () {
    $('input, button').prop('disabled', false);
  });

  // Example 073
  $('#btnHighlightRows').click(function () {
    $('tr:odd').css('background-color', '#f2f2f2');
  });

  // Example 074
  $('#btnSlideFadeToggle').click(function () {
    $('#slideFadeBox').fadeToggle().slideToggle();
  });

  // Example 075
  $('#btnAppendHTML').click(function () {
    $('#htmlAppendTarget').append('<b>Bold Text</b>');
  });

  // Example 076
  $('#btnUppercase').click(function () {
    const txt = $('#textUpper').val();
    $('#textUpper').val(txt.toUpperCase());
  });

  // Example 077
  $('#btnLowercase').click(function () {
    const txt = $('#textLower').val();
    $('#textLower').val(txt.toLowerCase());
  });

  // Example 078
  $('#btnAttrToggle').click(function () {
    const el = $('#toggleAttr');
    el.attr('data-active') ? el.removeAttr('data-active') : el.attr('data-active', 'true');
  });

  // Example 079
  $('#btnEachCheckbox').click(function () {
    $('input[type="checkbox"]').each(function () {
      $(this).prop('checked', true);
    });
  });

  // Example 080
  $('#btnCharCount').on('keyup', function () {
    const count = $(this).val().length;
    $('#charCountResult').text('Characters: ' + count);
  });
   // Example 081
  $('#btnHideParent').click(function () {
    $(this).parent().hide();
  });

  // Example 082
  $('#btnDisableOthers').click(function () {
    $('button').not(this).prop('disabled', true);
  });

  // Example 083
  $('#btnSetRandomBg').click(function () {
    const colors = ['red', 'blue', 'green', 'yellow'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    $('#randomBg').css('background', color);
  });

  // Example 084
  $('#btnReverseList').click(function () {
    const items = $('#reverseList li').get().reverse();
    $('#reverseList').empty().append(items);
  });

  // Example 085
  $('#btnToggleReadOnly').click(function () {
    const input = $('#readOnlyInput');
    input.prop('readonly', !input.prop('readonly'));
  });

  // Example 086
  $('#btnAddRow').click(function () {
    $('#rowTable').append('<tr><td>New Row</td></tr>');
  });

  // Example 087
  $('#btnSumInputs').click(function () {
    let total = 0;
    $('.sumInput').each(function () {
      total += Number($(this).val());
    });
    $('#sumResult').text('Total: ' + total);
  });

  // Example 088
  $('#btnDisableFirst').click(function () {
    $('input[type="text"]:first').prop('disabled', true);
  });

  // Example 089
  $('#btnAddBeforePara').click(function () {
    $('#targetPara').before('<p>Inserted Before</p>');
  });

  // Example 090
  $('#btnAddAfterPara').click(function () {
    $('#targetPara').after('<p>Inserted After</p>');
  });
  // Example 091
  $('#btnSlideDownUp').click(function () {
    $('#slideBox').slideDown().delay(500).slideUp();
  });

  // Example 092
  $('#btnFadeLoop').click(function () {
    $('#fadeLoopBox').fadeOut(300).fadeIn(300);
  });

  // Example 093
  $('#btnAttrList').click(function () {
    let attrs = '';
    $.each($('#attrLister')[0].attributes, function (i, attr) {
      attrs += attr.name + ': ' + attr.value + '\n';
    });
    alert(attrs);
  });

  // Example 094
  $('#btnMakeBold').click(function () {
    $('#makeBoldText').wrap('<b></b>');
  });

  // Example 095
  $('#btnMoveBox').click(function () {
    $('#moveBox').animate({ left: '+=50px' }, 500);
  });

  // Example 096
  $('#btnCountWords').click(function () {
    const text = $('#wordCounter').val();
    const count = text.trim().split(/\s+/).length;
    $('#wordCountResult').text('Words: ' + count);
  });

  // Example 097
  $('#btnFirstLastChange').click(function () {
    $('#firstLastList li:first').text('First Changed');
    $('#firstLastList li:last').text('Last Changed');
  });

  // Example 098
  $('#btnAttrAddClass').click(function () {
    $('[data-role="highlight"]').addClass('highlighted');
  });

  // Example 099
  $('#btnDisableByClass').click(function () {
    $('.toDisable').prop('disabled', true);
  });

  // Example 100
  $('#btnFadeAndRemove').click(function () {
    $('#toRemove').fadeOut(300, function () {
      $(this).remove();
    });
  });

  // ... Continue with 011–100 as needed ...
});