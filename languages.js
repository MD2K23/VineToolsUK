// Default Text strings to use if there isn't a localized option below
const hiddenText=" Hidden";
const filteredText=" Filtered";
const menuText="Advanced Filters";
const showMessage="Show Hidden / Filtered";
const hideMessage="Hide all items on this page";
const unhideMessage="Unhide all items on this page";
const filterText="Hide Keyword / Phrase";
const unfilterText="Unhide Keyword / Phrase";
const filterMessage="Enter keyword / phrase to hide:";
const unfilterMessage="Enter number of keyword / phrase to unhide:";
const highlightText="Highlight Keyword / Phrase"
const unhighlightText="Stop highlighting Keyword / Phrase"
const highlightMessage="Enter keyword / phrase to highlight:";
const unhighlightMessage="Enter number of keyword / phrase to stop highlighting:";

// UK US CA Language / Viewport support
if (location.hostname == "www.amazon.co.uk" || location.hostname == "www.amazon.com" || location.hostname == "www.amazon.ca"){
    // For any viewport
    hiddenText=" Hidden";
    filteredText=" Filtered";
    filterMessage="Enter keyword / phrase to hide:";
    unfilterMessage="Enter the number of the keyword / phrase to unhide:"
    highlightMessage="Enter keyword / phrase to highlight:";
    unhighlightMessage="Enter the number of the keyword / phrase to unhighlight:";
    filterText="Hide Keyword / Phrase";
    unfilterText="Unhide Keyword / Phrase";
    highlightText="Highlight Keyword / Phrase";
    unhighlightText="Unhighlight Keyword / Phrase";
    menuText="Advanced Filters";
    showMessage="Show Hidden / Filtered";
    hideMessage="Hide all items on this page";
    unhideMessage="Unhide all items on this page";

    // For narrow viewport
    if (window.innerWidth < 950){
        menuText="Advanced";
        showMessage="Show Hidden";
        hideMessage="Hide all";
        unhideMessage="Unhide all";
    }
}

// FR Language / Viewport support
if (location.hostname == "www.amazon.fr"){
    hiddenText=" Masqué(s)";
    filteredText=" Filtré(s)";
    filterMessage="Entrer le mot-clé / l'expression à masquer :";
    unfilterMessage="Entrer le mot-clé / l'expression à afficher :"
    highlightMessage="Entrer le mot-clé / l'expression à highlight:";
    unhighlightMessage="Entrer le mot-clé / l'expression à unhighlight:";
    filterText="Masquer le mot-clé / l'expression";
    unfilterText="Afficher le mot-clé / l'expression";
    highlightText="Highlight le mot-clé / l'expression";
    unhighlightText="Unhighlight le mot-clé / l'expression";
    menuText="Filtrés avancés";
    showMessage="Montrer les articles masqués / filtrés";
    hideMessage="Tout masquer sur cette page";
    unhideMessage="Tout afficher sur cette page";

    // For narrow viewport
    if (window.innerWidth < 1000){
        menuText="Avancés";
        showMessage="Afficher cachés";
        hideMessage="Tout cacher";
        unhideMessage="Tout afficher";
    }
}
