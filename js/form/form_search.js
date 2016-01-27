$(document).ready(function() {
	$(".form_search").each( function() {
		var form = $(this);

		$(form).submit( function() {
            if ($(form).attr("action")==''){
                $(form).find("input:gt(0)").each( function() {
                    if(!$(this).val()) {
                        $(this).removeAttr("name");
                    }
                });
                $(form).find("select").each(function() {
                    if($(this).val() == 0) {
                        $(this).removeAttr("name");
                    }
                });
            }
		});

		$(form).find(".button_clear_form").click( function() {
			$(form).find("input:gt(0)").each(function() {
				$(this).attr("value", "");
			});
			$(form).find("select").each(function() {
                            $(this).find('option:first').attr("selected", "selected");
//				$(this).find("[value=0]").attr("selected", "selected");
			});
		    $(".select_departments").each( function() {
		       $(this).selectObjDepartmentsReset();
		     });
			return false;
		});

	});
});

