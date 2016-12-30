var loaded = false;

window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "../vendor/soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {
      loaded = true;
		}
	});

  // $(document.body).click(function() {
  //   if (loaded === true) {
  //
  //     MIDI.noteOn(0, 67, 200, 0);
	// 		MIDI.noteOff(0, 67, 1 );
  //     console.log('Fuck ye')
  //   }
  //
  // });

  $('.key').click(function() {
    let id = $(this).attr('id');
    switch (id) {
      case 'C1':
        MIDI.noteOn(0, 36, 100, 0);
        MIDI.noteOff(0, 36, 1);
        break;
      case 'C#1':
        MIDI.noteOn(0, 37, 100, 0);
        MIDI.noteOff(0, 37, 1);
        break;
      default:
        break;

    }
  })

  $('.key').on('mousedown', function() {
    console.log("PRESS")
    $(this).addClass('active');
  });
  $('.key').on('mouseup', function() {
    console.log("RELEASE")
    $(this).removeClass('active');
  });

};
