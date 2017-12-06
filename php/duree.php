<?php
date_default_timezone_set('Europe/Paris');
function NbJour($debut, $fin = null)
{
    /*Si aucune date de fin est spécifié, on prend la date du jour*/
    if ($fin == null)
        $fin = date('d/m/Y');
    /*on "découpe" les dates de façon à obtenir un tableau de 3 lignes : 0=>jours, 1=>mois, 2=>années*/
    $debut = explode("/", $debut);
    $fin = explode("/", $fin);
    /*A partir de ce tableau, on reconstitue le timestamp grâce à la fonction mktime*/
    $debut = mktime(0, 0, 0, $debut[1], $debut[0], $debut[2]);
    $fin = mktime(0, 0, 0, $fin[1], $fin[0], $fin[2]);
    /*On soustrait les deux dates et on obtient le nombre de secondes écoulé*/
    $d = $fin - $debut;
    /*Il ne reste plus qu'à calculer le nombre d'années, mois et jours écoulé*/
    $duree = array("ans" => date('Y', $d) - 1970, "mois" => date('m', $d) - 1, "jours" => date('d', $d) - 1);

    //var_dump($duree);
    switch ($duree['ans']) {
        case 0:
            switch ($duree['mois']) {
                case 0:
                    return "Ce mois ci";
                    break;
                default:
                    return "Il y a " . $duree['mois'] . " mois";
                    break;

            }
            break;

        case 1:
            switch ($duree['mois']) {
                case 0:
                    return "Il y a " . $duree['ans'] . " an";
                    break;
                default:
                    return "Il y a " . $duree['ans'] . " an et " . $duree['mois'] . " mois";
                    break;
            }
            break;
        default:
            switch ($duree['mois']) {
                case 0:
                    return "Il y a " . $duree['ans'] . " ans";
                    break;
                default:
                    return "Il y a " . $duree['ans'] . " ans et " . $duree['mois'] . " mois";
                    break;
            }
            break;
    }
}
?>