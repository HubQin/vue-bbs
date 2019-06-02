<template>
    <div class="container">
        <div class="jumbotron">
            <div class="container">
                <h1>Welcome form bootstrap</h1>
                <p>This is a test page</p>
                <p>
                    <a href="http://www.bootcss.com" class="btn btn-primary btn-lg"
                    role="button" target="_blank">Learn More <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span></a>
                </p>
            </div>
        </div>
        <div class="jumbotrom">
            <div class="container">
                <h1>Welcome from Font Awesome</h1>
                <p>Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.</p>
                <p>
                    <i class="fa fa-camera"></i>
                    <i class="fa fa-camera fa-2x"></i>
                    <i class="fa fa-camera fa-3x"></i>
                    <i class="fa fa-camera fa-4x"></i>
                    <i class="fa fa-camera fa-5x"></i>
                    <i class="fa fa-spinner fa-spin"></i>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'app', //组件名称
}
</script>

<style lang="scss">
    $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
    $fa-font-path: "~font-awesome/fonts/";
    @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
    @import "~font-awesome/scss/font-awesome";

    body > .container {
        margin-top: 15px;

    }
</style>
