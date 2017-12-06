menu = {};

// ready event
menu.ready = function () {
    $('#contact')
        .form({
                on: 'blur',
                fields: {
                    emailfrom: {
                        identifier: 'emailfrom',
                        rules: [
                            {
                                type: 'email',
                                prompt: 'merci de rensegner un email valide'
                            }
                        ]
                    },
                    email_content: {
                        identifier: 'email_content',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter a value'
                            }
                        ]
                    }
                }

            }
        );
    $('#contact')
        .submit(
            function (event) {
                event.preventDefault();
                if ($('.ui.form').form('is valid')) {
                    // form is valid (both email and name)
                    $.post('http://localhost/php/email.php',
                        {
                            emailfrom: $('#contact').find('input[name="emailfrom"]').val(),
                            email_content: $('#contact').find('textarea[name="email_content"]').val()
                        },
                        function (data) {
                            console.log(data);
                            $('#sendMailMessage').html('Votre message a bien été envoyé');
                            $('#sendMailMessage').css('color', 'green');
                        }).fail(function (data) {
                        console.log(data);
                        $('#sendMailMessage').html('Echec de l\'envoi du mail... Veuillez réessayer ultérieurrement');
                        $('#sendMailMessage').css('color', 'red');
                    })
                }
                else {
                    $('#sendMailMessage').html('Veuillez remplir tous les champs');
                    $('#sendMailMessage').css('color', 'red');
                }
            }
        );

    $('.ui.sticky')
        .sticky('.segment')
    ;
    $("#mailbutton").click(function () {
        $('#formulaire').modal('show');
    });
    $('.ui.accordion')
        .accordion()
    ;
    // selector cache
    var
        $menuItem = $('.menu a.item, .menu .link.item').tab(),
        // alias
        handler = {
            activate: function () {
                $(this)
                    .addClass('active')
                    .closest('.ui.menu')
                    .find('.item')
                    .not($(this))
                    .removeClass('active');

                $(this).innerHTML = "";
                new Timesheet('timesheet', 2011, 2017, [
                    ['07/2006', '09/2006', 'Cuisinier à l\'hostellerie du Chateau', 'lorem'],
                    ['07/2007', '07/2008', 'Commis de salle à l\'hotel du palais, Biarritz', 'dolor'],
                    ['07/2008', '10/2008', 'Commis de Cuisine à l\'hotel Régina, Biarritz', 'sit'],
                    ['02/2009', '05/2009', 'Commis de cuisine au Chalet du Bissac, Flaine', 'ipsum'],
                    ['05/2009', '03/2011', 'Chef de cuisine au Havana Café, Anglet', 'default'],
                    ['03/2011', '05/2011', 'Patissier au Fournil de la Licorne, Bidart', 'sit'],
                    ['07/2011', '07/2011', 'Stage SOS Panic PC', 'dolor'],
                    ['12/2011', '04/2012', 'Stage Communauté des communes du Piémont Oloronais', 'ipsum'],
                    ['10/2012', '12/2017', 'Administrateur Systeme - Anaqua Services', 'default']
                ]);
            }

        }
        ;

    $menuItem
        .on('click', handler.activate)
    ;

};


// attach ready event

$(document).ready(menu.ready);

