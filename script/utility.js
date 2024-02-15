



function hide(id) {
    const h = document.getElementById(id);
    h.classList.add('hidden');
}


function show(id) {
    const s = document.getElementById(id);
    s.classList.remove('hidden');
}

function chaBg(id) {
    const s = document.getElementById(id);
    s.classList.add('bg-orange-400');
    s.classList.add('text-white');
}

function removeBg(id) {
    const s = document.getElementById(id);
    s.classList.remove('bg-orange-400');
    
}