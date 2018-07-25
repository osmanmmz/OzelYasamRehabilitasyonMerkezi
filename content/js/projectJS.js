var projectJS = {
    hostWithPort: (('' + window.location.href).match(/^(https?:)?\/\/[^/]+/i) ? ('' + window.location.href).match(/^(https?:)?\/\/[^/]+/i)[0] : '' ),

    logout: function () {
        $.ajax({
            headers: {"Authorization": "Basic " + btoa("" + ":" + "")},
            url: this.hostWithPort + "/panel",
            type: "get",
            error: function (jqXHR, textStatus, errorThrown) {
                window.location.replace(projectJS.hostWithPort);
            }
        });
    },

    login: function (username,password) {
        $.ajax({
            headers: {"Authorization": "Basic " + btoa("" + ":" + "")},
            url: this.hostWithPort + "/panel",
            type: "get",
            success: function (data) {
                window.location.replace(this.hostWithPort+ "/panel");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Hata!");
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }
}