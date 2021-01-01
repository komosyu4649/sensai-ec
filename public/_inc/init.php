<?php

define( 'ROOT_URL', ( empty( $_SERVER[ "HTTPS" ] ) ? "http://" : "https://" ) . $_SERVER[ "HTTP_HOST" ] );
define( 'ROOT', dirname( dirname( __FILE__ ) ) );
define( 'DS', DIRECTORY_SEPARATOR );
define( 'INC_DIR', ROOT . DS . '_inc' );
define( 'VIEW_DIR', INC_DIR . DS . 'views' );
define( 'CONFIG_DIR', INC_DIR . DS . 'config' );
define( 'DUMMY_DIR', CONFIG_DIR . DS . 'dummy' );

define( 'MODULES_DIR', VIEW_DIR . DS . 'modules' );
define( 'HEAD_FILE', MODULES_DIR . DS . 'head.php' );
define( 'HEADER_FILE', MODULES_DIR . DS . 'header.php' );
define( 'FOOTER_FILE', MODULES_DIR . DS . 'footer.php' );
define( 'RESERVATION_FILE', MODULES_DIR . DS . 'reservation.php' );
define( 'MENU_FILE', MODULES_DIR . DS . 'menu.php' );
define( 'CANVAS_FILE', MODULES_DIR . DS . 'canvas.php' );
define( 'MOUSE_CURSOR_FILE', MODULES_DIR . DS . 'mouseCursor.php' );
define( 'MODAL_COMMON_FILE', MODULES_DIR . DS . 'modal.php' );
define( 'LOAD_FILE', MODULES_DIR . DS . 'load.php' );
define( 'SCRIPT_FILE', MODULES_DIR . DS . 'script.php' );

define( 'COMPONENTS_DIR', VIEW_DIR . DS . 'components' );
define( 'SVG_FILE', COMPONENTS_DIR . DS . 'svg/svg.php' );
define( 'MODAL_HOME_FILE', COMPONENTS_DIR . DS . '/modal/home/modal_home.php' );
define( 'MODAL_COLLECTION_HOME_FILE', COMPONENTS_DIR . DS . '/modal/collection/modal_collection_home.php' );
define( 'MODAL_COLLECTION_SINGLE_FILE', COMPONENTS_DIR . DS . '/modal/collection/modal_collection_single.php' );
define( 'MODAL_JOURNAL_HOME_FILE', COMPONENTS_DIR . DS . '/modal/journal/modal_journal_home.php' );

define( 'ASSETS_DIR', '/assets' );
define( 'IMG_DIR', ASSETS_DIR . DS . 'img' );
define( 'CSS_DIR', ASSETS_DIR . DS . 'css' );
define( 'JS_DIR', ASSETS_DIR . DS . 'img' );


class UserAgent
{
    private $ua;
    private $device;

    public function set()
    {
        $this->ua = mb_strtolower( $_SERVER[ 'HTTP_USER_AGENT' ] );
        if ( strpos( $this->ua, 'iphone' ) !== false ) {
            $this->device = 'mobile';
        }
        elseif ( strpos( $this->ua, 'ipod' ) !== false ) {
            $this->device = 'mobile';
        }
        elseif ( ( strpos( $this->ua, 'android' ) !== false ) && ( strpos( $this->ua, 'mobile' ) !== false ) ) {
            $this->device = 'mobile';
        }
        elseif ( ( strpos( $this->ua, 'windows' ) !== false ) && ( strpos( $this->ua, 'phone' ) !== false ) ) {
            $this->device = 'mobile';
        }
        elseif ( ( strpos( $this->ua, 'firefox' ) !== false ) && ( strpos( $this->ua, 'mobile' ) !== false ) ) {
            $this->device = 'mobile';
        }
        elseif ( strpos( $this->ua, 'blackberry' ) !== false ) {
            $this->device = 'mobile';
        }
        elseif ( strpos( $this->ua, 'ipad' ) !== false ) {
            $this->device = 'tablet';
        }
        elseif ( ( strpos( $this->ua, 'windows' ) !== false ) && ( strpos( $this->ua, 'touch' ) !== false && ( strpos( $this->ua, 'tablet pc' ) == false ) ) ) {
            $this->device = 'tablet';
        }
        elseif ( ( strpos( $this->ua, 'android' ) !== false ) && ( strpos( $this->ua, 'mobile' ) === false ) ) {
            $this->device = 'tablet';
        }
        elseif ( ( strpos( $this->ua, 'firefox' ) !== false ) && ( strpos( $this->ua, 'tablet' ) !== false ) ) {
            $this->device = 'tablet';
        }
        elseif ( ( strpos( $this->ua, 'kindle' ) !== false ) || ( strpos( $this->ua, 'silk' ) !== false ) ) {
            $this->device = 'tablet';
        }
        elseif ( ( strpos( $this->ua, 'playbook' ) !== false ) ) {
            $this->device = 'tablet';
        }
        elseif ( ( strpos( $this->ua, 'firefox' ) !== false ) && ( strpos( $this->ua, 'mac' ) !== false ) ) {
            $this->device = 'firefox';
        }
        elseif ( ( strpos( $this->ua, 'chrome' ) !== false ) && ( strpos( $this->ua, 'mac' ) !== false ) ) {
            $this->device = 'chrome';
        }
        elseif ( ( strpos( $this->ua, 'mac' ) !== false ) ) {
            $this->device = 'mac';
        }
        elseif ( ( strpos( $this->ua, 'firefox' ) !== false ) ) {
            $this->device = 'firefox';
        }
        elseif ( ( strpos( $this->ua, 'msie' ) !== false ) || ( strpos( $this->ua, 'trident/7' ) !== false ) ) {
            $this->device = 'ie';
        }
        elseif ( ( strpos( $this->ua, 'edge' ) !== false ) ) {
            $this->device = 'edge';
        }
        elseif ( ( strpos( $this->ua, 'chrome' ) !== false ) ) {
            $this->device = 'chrome';
        }
        else {
            $this->device = 'others';
        }
        return $this->device;
    }

    static public function check()
    {
        return new UserAgent();
    }
}

define( 'UA', UserAgent::check()->set() );

if( UA === 'firefox' || UA === 'chrome' ){
    define( 'JPG', '.jpg' );
} else {
    define( 'JPG', '.jpg' );
}
?>
