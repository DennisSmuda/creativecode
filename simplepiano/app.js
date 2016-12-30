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
      case 'D1':
        MIDI.noteOn(0, 38, 100, 0);
        MIDI.noteOff(0, 38, 1);
        break;
      case 'D#1':
        MIDI.noteOn(0, 39, 100, 0);
        MIDI.noteOff(0, 39, 1);
        break;
      case 'E1':
        MIDI.noteOn(0, 40, 100, 0);
        MIDI.noteOff(0, 40, 1);
        break;
      case 'F1':
        MIDI.noteOn(0, 41, 100, 0);
        MIDI.noteOff(0, 41, 1);
        break;
      case 'F#1':
        MIDI.noteOn(0, 42, 100, 0);
        MIDI.noteOff(0, 42, 1);
        break;
      case 'G1':
        MIDI.noteOn(0, 43, 100, 0);
        MIDI.noteOff(0, 43, 1);
        break;
      case 'G#1':
        MIDI.noteOn(0, 44, 100, 0);
        MIDI.noteOff(0, 44, 1);
        break;
      case 'A1':
        MIDI.noteOn(0, 45, 100, 0);
        MIDI.noteOff(0, 45, 1);
        break;
      case 'A#1':
        MIDI.noteOn(0, 46, 100, 0);
        MIDI.noteOff(0, 46, 1);
        break;
      case 'B1':
        MIDI.noteOn(0, 47, 100, 0);
        MIDI.noteOff(0, 47, 1);
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
